import { useContext } from 'react';
import { GlobalModalContext } from '../providers/GlobalModalProvider.tsx';

const useGlobalModal = () => {
  const context = useContext(GlobalModalContext);
  if (context === null) {
    throw new Error('useGlobalModal must be used within a GlobalModalProvider');
  }
  return context;
};

export default useGlobalModal;
