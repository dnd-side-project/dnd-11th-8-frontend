import downArrow from '@/assets/icon/downArrow.svg';
import { useEffect, useRef, useState } from 'react';

interface FilterButtonProps {
  filterOptions: string[];
  onSelect: (value: string) => void;
  selected: string;
}

const FilterButton = ({ filterOptions, selected, onSelect }: FilterButtonProps) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const dropdownId = 'my-plant-feed-dropdown-id';

  const handleButtonClick = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOptionsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!e.target) return;
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOptionsVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-fit" ref={containerRef}>
      <button
        className="flex items-center justify-center gap-[6px] text-Gray500"
        onClick={handleButtonClick}
      >
        <p>{selected as string}</p>
        <img src={downArrow} alt="아래 화살표" />
      </button>

      {isOptionsVisible && (
        <div
          id={dropdownId}
          className="absolute bg-white rounded-[16px] z-50 w-[161px] right-0 top-[35px] p-[10px] shadow-Weak-Filter"
        >
          <ul className="flex flex-col">
            <p className="block w-full text-left text-Gray500 font-bold text-[13px]">정렬</p>
            <hr className="w-full my-[10px] border-Gray100" />

            {filterOptions.map((value) => (
              <li key={value}>
                <button
                  className={`block w-full p-[10px] text-left hover:bg-GrayOpacity100 rounded-[10px] ${selected === value ? 'bg-GrayOpacity100' : ''}`}
                  onClick={() => handleSelect(value)}
                >
                  <p className="text-[15px] text-Gray700 font-medium hover:font-semibold ">
                    {value}
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
