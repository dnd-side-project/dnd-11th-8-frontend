interface DeleteConfirmationProps {
  onCancel: () => void;
  onDelete: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({ onCancel, onDelete }) => (
  <div>
    <div className="px-[24px] py-[10px]">
      <p className="text-Gray800 text-[20px] font-bold">정말 삭제하시나요?</p>
      <p className="text-Gray800 text-[20px] font-bold">삭제 후에는 되돌릴 수 없어요</p>
    </div>
    <div className="flex gap-[10px]">
      <button
        onClick={onCancel}
        className="w-full px-[28px] py-[18px] bg-Gray100 rounded-[16px] text-Gray800 text-[17px]"
      >
        취소
      </button>
      <button
        onClick={onDelete}
        className="w-full px-[28px] py-[18px] bg-Red500 rounded-[16px] text-white text-[17px]"
      >
        삭제
      </button>
    </div>
  </div>
);

export default DeleteConfirmation;
