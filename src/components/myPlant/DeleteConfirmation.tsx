import React from 'react';
import useToast from '@/hooks/useToast'; // 올바른 경로로 수정
import { useDeleteLocation } from '@/queries/useDeleteLocation';
import CenterBottomSheet from '@/components/common/CenterBottomSheet';
import CTAButton from '@/components/common/CTAButton';

interface DeleteConfirmationProps {
  onOpenChange: (value: boolean) => void;
  onDelete: () => void;
  isOpen: boolean;
  locationId: number;
  onClose: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  onOpenChange,
  isOpen,
  onDelete,
  locationId,
  onClose,
}) => {
  const { openToast } = useToast();
  const { mutate } = useDeleteLocation();

  const handleDeleteLocation = () => {
    mutate(locationId, {
      onSuccess: () => {
        openToast({
          message: '삭제되었습니다.',
          duration: 1500,
          className: 'text-white',
        });
        onDelete();
      },
    });
  };

  const handleDelete = () => {
    handleDeleteLocation();
  };

  return (
    <CenterBottomSheet
      title={'정말 삭제하시나요?\n삭제 후에는 되돌릴 수 없어요'}
      content={<></>}
      actionDirection={'row'}
      actions={[
        <CTAButton text={'취소'} onClick={onClose} variant={'ghost'} />,
        <CTAButton text={'삭제'} onClick={handleDelete} variant={'warning'} />,
      ]}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    />
  );
};

export default DeleteConfirmation;
