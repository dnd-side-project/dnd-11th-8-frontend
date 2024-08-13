import { useState, useRef, useEffect } from 'react';
import downArrow from '@/assets/icon/downArrow.svg';

const filterOptions = ['등록 오래된 순', '최근 등록 순', '물주기 오래된 순', '물주기 최근 순'];

const FilterButton = () => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(filterOptions[1]);
  const optionsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = () => {
    setOptionsVisible((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setOptionsVisible(false);
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
      {/* 필터 버튼 */}
      <button
        ref={buttonRef}
        className="flex items-center justify-center gap-[6px] text-Gray500"
        onClick={handleButtonClick}
      >
        <p>{selectedOption}</p> {/* 선택된 옵션 텍스트 */}
        <img src={downArrow} alt="아래 화살표" />
      </button>

      {/* 배경 오버레이 */}
      {isOptionsVisible && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50"
          style={{ zIndex: 50 }}
          onClick={() => setOptionsVisible(false)}
        />
      )}

      {/* 옵션들이 보이는 영역 */}
      {isOptionsVisible && (
        <div
          ref={optionsRef}
          className="absolute bg-white rounded-[16px] shadow-GreyOpacity300 z-50 w-[161px] right-0 top-[35px] p-[10px]"
        >
          <ul className="flex flex-col">
            <p className="block w-full text-left text-Gray500 font-bold text-[13px]">정렬</p>
            <hr className="w-full my-[10px] border-Gray100" />

            {filterOptions.map((option, index) => (
              <li key={index}>
                <button
                  className={`block w-full p-[10px] text-left hover:bg-GrayOpacity100 rounded-[10px] ${selectedOption === option && 'bg-GrayOpacity100'}`}
                  onClick={() => handleOptionClick(option)}
                >
                  <p className="text-[15px] text-Gray700 font-medium hover:font-semibold ">
                    {option}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
