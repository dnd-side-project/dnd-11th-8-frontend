import { createContext, PropsWithChildren, ReactNode, useState } from 'react';

interface ModalState {
  title?: string;
  description: string;
  actions: ReactNode[];
  isOpen: boolean;
}

export interface GlobalModalContextState {
  openModal: (modalState: ModalState) => void;
  closeModal: () => void;
}

const initialModalState: ModalState = {
  title: '',
  description: '',
  actions: [],
  isOpen: false,
};

export const GlobalModalContext = createContext<GlobalModalContextState | null>(null);

interface GlobalModalProviderProps extends PropsWithChildren {}

export const GlobalModalProvider = ({ children }: GlobalModalProviderProps) => {
  const [modalState, setModalState] = useState(initialModalState);

  const openModal = (modalState: Omit<ModalState, 'isOpen'>) => {
    setModalState({ ...modalState, isOpen: true });
  };

  const closeModal = () => {
    setModalState(initialModalState);
  };

  return (
    <GlobalModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalState.isOpen && (
        <div
          id={'back-drop'}
          className={'w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-30'}
        >
          <div id={'modal-content'}>
            {modalState.title && (
              <header>
                <h2>modalState.title</h2>
              </header>
            )}
            <p>{modalState.description}</p>
            <footer>{...modalState.actions}</footer>
          </div>
        </div>
      )}
    </GlobalModalContext.Provider>
  );
};
