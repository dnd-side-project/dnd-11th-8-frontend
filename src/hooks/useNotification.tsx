import { useCallback, useState } from 'react';
import CenterBottomSheet from '@/components/common/CenterBottomSheet';
import CTAButton from '@/components/common/CTAButton';
import { useDeleteDeviceToken } from '@/queries/useDeleteDeviceToken.ts';
import { useToken } from '@/hooks/useToken.ts';

const DEVICE_TOKEN_KEY = 'deviceToken';
const DEVICE_TOKEN_REQUESTED = 'requested';

export const useNotification = () => {
  // const { mutate: createDeviceToken } = useCreateDeviceToken();
  const { mutate: deleteDeviceToken } = useDeleteDeviceToken();
  const { getAccessToken } = useToken();

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
    if (window?.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(getAccessToken());
    }

    localStorage.setItem(DEVICE_TOKEN_KEY, DEVICE_TOKEN_REQUESTED);
  }, []);

  const denyPermission = useCallback(() => {
    localStorage.setItem(DEVICE_TOKEN_KEY, DEVICE_TOKEN_REQUESTED);
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
