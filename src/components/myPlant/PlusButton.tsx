import { useState, useRef, useEffect } from 'react';
import plusBtn from '@/assets/icon/myPlantPlusBtn.svg';
import location from '@/assets/icon/location.svg';
import sprout from '@/assets/icon/sprout.svg';
import trashIcon from '@/assets/icon/trashIcon.svg'; // Import the trash icon

interface PlusButtonProps {
  onOptionClick: () => void;
  onCloseOverlay: () => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({ onOptionClick, onCloseOverlay }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [isLocationInputVisible, setLocationInputVisible] = useState(false);
  const [isDeleteConfirmationVisible, setDeleteConfirmationVisible] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = () => {
    setOptionsVisible((prev) => {
      const newVisibility = !prev;
      if (newVisibility) {
        onOptionClick();
      } else {
        onCloseOverlay();
      }
      return newVisibility;
    });
  };

  const handleLocationClick = () => {
    setBottomSheetVisible(true);
  };

  const handleModifyClick = () => {
    setLocationInputVisible(true);
  };

  const handleDeleteClick = () => {
    setDeleteConfirmationVisible(true);
  };

  const handleCancelClick = () => {
    setBottomSheetVisible(false);
    setLocationInputVisible(false);
    setDeleteConfirmationVisible(false);
  };

  const handleLocationChange = () => {
    setBottomSheetVisible(false);
    setLocationInputVisible(false);
    setDeleteConfirmationVisible(false);
    setOptionsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOptionsVisible(false);
        onCloseOverlay();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onCloseOverlay]);

  return (
    <div className="relative">
      {/* Overlay */}
      {isOptionsVisible && (
        <div className="fixed inset-0 z-30 bg-SementicDimBackground" onClick={onCloseOverlay} />
      )}

      <div className="fixed bottom-[61px] right-0 z-40">
        <button ref={buttonRef} onClick={handleButtonClick}>
          <img src={plusBtn} alt="플러스 버튼" />
        </button>
      </div>

      {isOptionsVisible && (
        <div
          ref={optionsRef}
          className="fixed bottom-[171px] right-[16.8px] bg-white p-[10px] rounded-[16px] z-40"
        >
          <div className="flex flex-col">
            <button className="flex gap-[10px] p-[10px] rounded-[10px] hover:bg-GrayOpacity100">
              <img src={sprout} alt="새싹 아이콘" />
              <p>식물 등록하기</p>
            </button>
            <button
              onClick={handleLocationClick}
              className="flex gap-[10px] p-[10px] rounded-[10px] hover:bg-GrayOpacity100"
            >
              <img src={location} alt="위치 아이콘" />
              <p>위치 설정하기</p>
            </button>
          </div>
        </div>
      )}

      {isBottomSheetVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-SementicDimBackground2"
            onClick={handleCancelClick}
          ></div>
          <div className="relative bg-white p-[15px] rounded-[16px] shadow-sm mx-[10px] max-w-[355px] w-full">
            {!isLocationInputVisible && !isDeleteConfirmationVisible && (
              <>
                <p
                  className="px-[24px] py-[10px] text-Gray800 font-bold mb-[15px] whitespace-nowrap"
                  style={{
                    fontSize: 'clamp(16px, 4vw, 25px)',
                  }}
                >
                  위치명을 수정하거나 삭제 할 수 있어요.
                </p>
                <div className="flex flex-col gap-[8px]">
                  <button
                    onClick={handleModifyClick}
                    className="px-[28px] py-[18px] text-white bg-BloomingGreen500 rounded-[16px]"
                  >
                    수정
                  </button>
                  <button
                    onClick={handleDeleteClick}
                    className="px-[28px] py-[18px] text-Gray800 bg-Gray100 rounded-[16px]"
                  >
                    삭제
                  </button>
                </div>
              </>
            )}

            {isLocationInputVisible && !isDeleteConfirmationVisible && (
              <div className="flex flex-col mx-[10px] w-full max-w-[355px]">
                <label htmlFor="location" className="text-Gray800 text-[13px] font-medium">
                  공간명 수정
                </label>
                <div className="relative">
                  <input
                    id="location"
                    type="text"
                    className="w-full p-2 pr-10 mb-4 border-b-2 border-Gray100 focus:outline-none text-[24px] text-Gray800 font-semibold"
                  />
                  <img
                    src={trashIcon}
                    alt="삭제 아이콘"
                    className="absolute cursor-pointer right-3 top-3"
                    onClick={handleDeleteClick}
                  />
                </div>
                <button
                  onClick={handleLocationChange}
                  className="px-[28px] py-[18px] text-white bg-BloomingGreen500 rounded-[16px] my-[10px]"
                >
                  변경
                </button>
              </div>
            )}

            {isDeleteConfirmationVisible && (
              <div>
                <div className="px-[24px] py-[10px]">
                  <p className="text-Gray800 text-[20px] font-bold	">정말 삭제하시나요?</p>
                  <p className="text-Gray800 text-[20px] font-bold	">삭제 후에는 되돌릴 수 없어요</p>
                </div>
                <div className="flex gap-[10px]">
                  <button
                    onClick={handleCancelClick}
                    className="w-full px-[28px] py-[18px] bg-Gray100 rounded-[16px] text-Gray800 text-[17px]"
                  >
                    취소
                  </button>
                  <button
                    onClick={handleLocationChange}
                    className="w-full px-[28px] py-[18px] bg-Red500 rounded-[16px] text-white text-[17px]"
                  >
                    삭제
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlusButton;
