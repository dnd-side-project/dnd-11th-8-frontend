import useGlobalModal from '@/hooks/useGlobalModal.ts';
import { ReactNode } from 'react';

const useToast = () => {
  const { openModal, closeModal } = useGlobalModal();

  const openToast = ({
    message,
    duration = 3000,
  }: {
    message: ReactNode | string;
    duration?: number;
  }) => {
    openModal({
      title: (
        <div
          className={
            'py-4 px-5 bg-GrayOpacity600 w-10/12 max-w-md rounded-[10px] mx-auto flex items-center justify-center'
          }
        >
          {message}
        </div>
      ),
      backdrop: false,
      actions: [],
    });

    setTimeout(() => {
      closeModal();
    }, duration);
  };

  return {
    openToast,
  };
};

export default useToast;