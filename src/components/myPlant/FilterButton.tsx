import { useState, useRef, useEffect } from 'react';
import { useAtom } from 'jotai';
import filterQueryAtom from '@/atoms/myPlant/filterQueryAtom';
import downArrow from '@/assets/icon/downArrow.svg';

const filterOptions = [
  { label: '등록 오래된 순', sort: 'CREATED', direction: 'ASC' },
  { label: '최근 등록 순', sort: 'CREATED', direction: 'DESC' },
  { label: '물주기 오래된 순', sort: 'WATERED', direction: 'ASC' },
  { label: '물주기 최근 순', sort: 'WATERED', direction: 'DESC' },
];

const FilterButton = () => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [query, setQuery] = useAtom(filterQueryAtom);
  const optionsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = () => {
    setOptionsVisible((prev) => !prev);
  };

  const handleOptionClick = (option: (typeof filterOptions)[0]) => {
    setQuery({
      sort: option.sort,
      direction: option.direction,
    });
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
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 현재 query 상태에 따른 label 찾기
  const currentLabel =
    filterOptions.find(
      (option) => option.sort === query.sort && option.direction === query.direction,
    )?.label || '최근 등록 순'; // 기본값으로 '최근 등록 순' 설정

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="flex items-center justify-center gap-[6px] text-Gray500"
        onClick={handleButtonClick}
      >
        <p>{currentLabel}</p>
        <img src={downArrow} alt="아래 화살표" />
      </button>

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
                  className={`block w-full p-[10px] text-left hover:bg-GrayOpacity100 rounded-[10px] ${query.sort === option.sort && query.direction === option.direction ? 'bg-GrayOpacity100' : ''}`}
                  onClick={() => handleOptionClick(option)}
                >
                  <p className="text-[15px] text-Gray700 font-medium hover:font-semibold ">
                    {option.label}
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
