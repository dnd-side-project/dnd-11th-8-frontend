import { useCallback, useState } from 'react';
import { getToken } from 'firebase/messaging';
import { messaging } from '@/libs/firebase.ts';
import { useCreateDeviceToken } from '@/queries/useCreateDeviceToken.ts';
import CenterBottomSheet from '@/components/common/CenterBottomSheet';
import CTAButton from '@/components/common/CTAButton';
import { useDeleteDeviceToken } from '@/queries/useDeleteDeviceToken.ts';

const DEVICE_TOKEN_KEY = 'deviceToken';
const DEVICE_TOKEN_DENIED_VALUE = 'denied';

export const useNotification = () => {
  const { mutate: createDeviceToken } = useCreateDeviceToken();
  const { mutate: deleteDeviceToken } = useDeleteDeviceToken();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = useCallback(() => {
    setIsModalOpen(false);
    denyPermission();
  }, []);

  const RequestPermissionModal = useCallback(
    () => (
      <CenterBottomSheet
        title={'푸쉬 알림을 받으시겠어요?'}
        content={''}
        actionDirection={'row'}
        actions={[
          <CTAButton text={'취소'} onClick={() => {}} className="bg-Gray300" />,
          <CTAButton
            text={'허용'}
            onClick={async () => {
              setIsModalOpen(false);
              await requestPermission();
            }}
            className="bg-BloomingGreen500"
          />,
        ]}
        isOpen={isModalOpen}
        onOpenChange={(value) => {
          if (!value) {
            onClose();
          }
        }}
      />
    ),
    [isModalOpen],
  );

  const requestPermission = useCallback(async () => {
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_VAPID_KEY,
      });

      createDeviceToken(token);

      localStorage.setItem(DEVICE_TOKEN_KEY, token);
      return;
    }

    localStorage.setItem(DEVICE_TOKEN_KEY, DEVICE_TOKEN_DENIED_VALUE);
  }, []);

  const denyPermission = useCallback(() => {
    localStorage.setItem(DEVICE_TOKEN_KEY, DEVICE_TOKEN_DENIED_VALUE);
    deleteDeviceToken(undefined);
  }, []);

  const openPermissionModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const isPermissionChecked = localStorage.getItem(DEVICE_TOKEN_KEY) !== null;

  return {
    requestPermission,
    RequestPermissionModal,
    isPermissionChecked,
    openPermissionModal,
    denyPermission,
  };
};
