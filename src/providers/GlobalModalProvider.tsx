import { createContext, PropsWithChildren, ReactNode, useCallback, useState } from 'react';

interface ModalState {
  title?: string | ReactNode;
  description?: string | ReactNode;
  actions: ReactNode[];
  isOpen: boolean;
  backdrop?: boolean;
}

export interface GlobalModalContextState {
  openModal: (modalState: Omit<ModalState, 'isOpen'>) => void;
  closeModal: () => void;
}

const initialModalState: ModalState = {
  title: '',
  description: '',
  actions: [],
  isOpen: false,
  backdrop: false,
};

export const GlobalModalContext = createContext<GlobalModalContextState | null>(null);

interface GlobalModalProviderProps extends PropsWithChildren {}

export const GlobalModalProvider = ({ children }: GlobalModalProviderProps) => {
  const [modalState, setModalState] = useState(initialModalState);

  const openModal = useCallback((modalState: Omit<ModalState, 'isOpen'>) => {
    setModalState({ ...modalState, isOpen: true });
  }, []);

  const closeModal = useCallback(() => {
    setModalState(initialModalState);
  }, []);

  return (
    <GlobalModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalState.isOpen && (
        <>
          {modalState.backdrop && (
            <div
              id={'back-drop'}
              className={
                'w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-40 flex items-center justify-center'
              }
            />
          )}
          <div
            className={'fixed w-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'}
            id={'modal-content'}
          >
            {modalState.title && <header>{modalState.title}</header>}
            <p>{modalState.description}</p>
            <footer>{...modalState.actions}</footer>
          </div>
        </>
      )}
    </GlobalModalContext.Provider>
  );
};
