import { useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import filterQueryAtom from '@/atoms/myPlant/filterQueryAtom';
import DownArrow from '@/assets/icon/down-arrow-gray.svg?react';
import { LocationQueryParams } from '@/apis/myPlant/getMyAllPlant.ts';
import { AnimatePresence, motion } from 'framer-motion';

const filterOptions: Record<string, LocationQueryParams['sort']> = {
  '최근 등록 순': 'created_desc',
  '등록 오래된 순': 'created_asc',
  '위치 없음': 'no_location',
};

const FilterButton = () => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [query, setQuery] = useAtom(filterQueryAtom);
  const optionsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = () => {
    setOptionsVisible((prev) => !prev);
  };

  const handleOptionClick = (option: LocationQueryParams['sort']) => {
    setQuery(option);
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

  let currentLabel = '전체';

  if (query !== undefined) {
    currentLabel =
      Object.entries(filterOptions).find(([, value]) => value === query)?.[0] ?? '전체';
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="flex items-center justify-center gap-[6px] text-Gray500"
        onClick={handleButtonClick}
      >
        <p>{currentLabel}</p>
        <DownArrow />
      </button>

      <AnimatePresence>
        {isOptionsVisible && (
          <motion.div
            ref={optionsRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="absolute bg-white rounded-[16px] shadow-Weak-Filter z-50 w-[161px] right-0 top-[35px] p-[10px] overflow-hidden"
          >
            <ul className="flex flex-col">
              <p className="block w-full text-left text-Gray500 font-bold text-[13px]">정렬</p>
              <hr className="w-full my-[10px] border-Gray100" />

              {Object.entries(filterOptions).map(([key, value], index) => (
                <li key={index}>
                  <button
                    className={`block w-full p-[10px] text-left hover:bg-GrayOpacity100 rounded-[10px] ${query === value ? 'bg-GrayOpacity100' : ''}`}
                    onClick={() => handleOptionClick(value)}
                  >
                    <p className="text-[15px] text-Gray700 font-medium hover:font-semibold ">
                      {key}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterButton;
