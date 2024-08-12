import plusBtn from '@/assets/icon/myPlantPlusBtn.svg';
import { useState, useRef, useEffect } from 'react';
import location from '@/assets/icon/location.svg';
import sprout from '@/assets/icon/sprout.svg';

interface PlusButtonProps {
  onOptionClick: () => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({ onOptionClick }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = () => {
    setOptionsVisible(!isOptionsVisible);
    onOptionClick();
  };

  // 클릭 외부 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOptionsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* 플러스 버튼 */}
      <div className="fixed bottom-[61px] right-0 z-40">
        <button ref={buttonRef} onClick={handleButtonClick}>
          <img src={plusBtn} alt="플러스 버튼" />
        </button>
      </div>

      {/* 옵션들이 보이는 영역 */}
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
            <button className="flex gap-[10px] p-[10px] rounded-[10px] hover:bg-GrayOpacity100">
              <img src={location} alt="위치 아이콘" />
              <p>위치 설정하기</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlusButton;
