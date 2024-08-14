import { useState } from 'react';

export const useDeleteLocationModal = () => {
  const [isOpenDeleteModal, setIsOpenDeleteMoal] = useState(false);
  const [deleteLocationId, setDeleteLocationId] = useState<number | null>(null);

  const openDeleteModal = (id: number) => {
    setDeleteLocationId(id);
    setIsOpenDeleteMoal(true);
  };

  const closeDeleteModal = () => {
    setIsOpenDeleteMoal(false);
    setDeleteLocationId(null);
  };

  return {
    deleteLocationId,
    openDeleteModal,
    isOpenDeleteModal,
    closeDeleteModal,
  };
};
