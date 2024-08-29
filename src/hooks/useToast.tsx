import useGlobalModal from '@/hooks/useGlobalModal.ts';
import { ReactNode, useCallback } from 'react';

const useToast = () => {
  const { openModal, closeModal } = useGlobalModal();

  const openToast = useCallback(
    ({
      message,
      duration = 3000,
      className,
    }: {
      message: ReactNode | string;
      duration?: number;
      className?: string;
    }) => {
      openModal({
        title: (
          <div
            className={`py-4 px-5 bg-GrayOpacity600 w-10/12 max-w-md rounded-[10px] mx-auto flex items-center justify-center ${className}`}
          >
            {typeof message === 'string' ? (
              <p
                className={
                  'flex flex-row items-center justify-center w-full gap-2 text-small-body font-medium text-white'
                }
              >
                {message}
              </p>
            ) : (
              message
            )}
          </div>
        ),
        backdrop: false,
        actions: [],
      });

      setTimeout(() => {
        closeModal();
      }, duration);
    },
    [openModal, closeModal],
  );

  return {
    openToast,
  };
};

export default useToast;
