interface BottomSheetProps {
  onEditButtonClick: () => void;
  onDeleteButtonClick: () => void;
  onCancel: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  onEditButtonClick,
  onDeleteButtonClick,
  onCancel,
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="fixed inset-0 bg-SementicDimBackground2" onClick={onCancel}></div>
    <div className="relative bg-white p-[15px] rounded-[16px] shadow-sm mx-[10px] max-w-[355px] w-full">
      <div className="flex justify-center w-full">
        <div className="w-[48px] h-[4px] rounded-[40px] bg-Gray100" />
      </div>
      <p
        className="px-[24px] py-[10px] text-Gray800 font-bold mb-[15px] whitespace-nowrap flex justify-center"
        style={{ fontSize: 'clamp(16px, 4vw, 18px)' }}
      >
        위치명을 수정하거나 삭제 할 수 있어요.
      </p>
      <div className="flex flex-col gap-[8px]">
        <button
          onClick={onEditButtonClick}
          className="px-[28px] py-[18px] text-white bg-BloomingGreen500 rounded-[16px]"
        >
          수정
        </button>
        <button
          onClick={onDeleteButtonClick}
          className="px-[28px] py-[18px] text-Gray800 bg-Gray100 rounded-[16px]"
        >
          삭제
        </button>
      </div>
    </div>
  </div>
);

export default BottomSheet;
