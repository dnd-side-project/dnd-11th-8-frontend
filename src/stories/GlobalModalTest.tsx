import useGlobalModal from '../hooks/useGlobalModal';

interface GlobalModalTestProps {
  title?: string;
  description: string;
}

const GlobalModalTest = ({ title, description }: GlobalModalTestProps) => {
  const { openModal, closeModal } = useGlobalModal();

  const handleOpenModal = () => {
    openModal({ title, description, actions: [<button onClick={closeModal}>닫기</button>] });
  };

  return (
    <div>
      <button onClick={handleOpenModal}>모달 열기</button>
    </div>
  );
};

export default GlobalModalTest;
