import { useState } from 'react';

export const MODE = {
  ADD: 'ADD',
  EDIT: 'EDIT',
} as const;

export type MODE = (typeof MODE)[keyof typeof MODE] | null;

interface ModalState {
  mode: MODE;
  open: boolean;
}

const initialModalState = {
  mode: null,
  open: false,
};

export const useLocationModalState = () => {
  const [modalState, setModalState] = useState<ModalState>(initialModalState);

  const initializeModalState = () => {
    setModalState(initialModalState);
  };

  const openAddModal = () => {
    setModalState({ mode: MODE.ADD, open: true });
  };

  const openEditModal = () => {
    setModalState({ mode: MODE.EDIT, open: true });
  };

  return {
    modalState,
    openAddModal,
    openEditModal,
    initializeModalState,
  };
};
