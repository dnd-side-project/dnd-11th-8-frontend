import { useCallback, useState } from 'react';
import { getToken } from 'firebase/messaging';
import { messaging } from '@/libs/firebase.ts';
import { useCreateDeviceToken } from '@/queries/useCreateDeviceToken.ts';
import CenterBottomSheet from '@/components/common/CenterBottomSheet';
import CTAButton from '@/components/common/CTAButton';
import { useDeleteDeviceToken } from '@/queries/useDeleteDeviceToken.ts';

const DEVICE_TOKEN_KEY = 'deviceToken';
const DEVICE_TOKEN_DENIED = 'denied';
const DEVICE_TOKEN_REQUESTED = 'requested';

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
          <CTAButton text={'취소'} onClick={() => {}} variant={'ghost'} />,
          <CTAButton
            text={'허용'}
            onClick={async () => {
              setIsModalOpen(false);
              await requestPermission();
            }}
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
      localStorage.setItem(DEVICE_TOKEN_KEY, DEVICE_TOKEN_REQUESTED);
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_VAPID_KEY,
      });

      createDeviceToken(token);

      localStorage.setItem(DEVICE_TOKEN_KEY, token);
      return;
    }

    localStorage.setItem(DEVICE_TOKEN_KEY, DEVICE_TOKEN_DENIED);
  }, []);

  const denyPermission = useCallback(() => {
    localStorage.setItem(DEVICE_TOKEN_KEY, DEVICE_TOKEN_DENIED);
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
