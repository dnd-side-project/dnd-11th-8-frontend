import React, { useRef, useState } from 'react';
import GuideDetailsProps from '@/types/GuideDetailsProps';
import seeMoreBtnIcon from '@/assets/icon/guideDetailDownArrow.svg';
import { guideDetailIconMap } from '@/constants/guideIconMap.ts';

const SimpleView: React.FC<{ items: GuideDetailsProps['simpleView'] }> = ({ items }) => {
  const keys = Object.keys(items) as Array<keyof typeof items>;
  const [showAll, setShowAll] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const initialItemsToShow = 4;
  const extraItems = keys.slice(initialItemsToShow);

  const formatDescription = (description: string) => {
    return { __html: description.replace(/\n/g, '<br />') };
  };

  return (
    <>
      <h1 className="px-[24px] py-[10px] text-LabelNormal text-[18px] font-bold mt-[27.5px]">
        한 눈에 보는 식물 정보
      </h1>
      <div className="grid w-full grid-cols-2 gap-2 px-[24px] mt-[7px]">
        {keys.slice(0, initialItemsToShow).map((key) => (
          <div
            key={key}
            className="bg-GrayOpacity100 w-full min-h-[128px] rounded-[10px] flex flex-col px-[20px] py-[15px] gap-[8px]"
          >
            <img className="w-[24px] h-[24px]" src={guideDetailIconMap[key]} alt="아이콘" />
            <h3 className="text-Gray900 text-[15px] font-semibold">{items[key].title}</h3>
            <p
              className="mt-[8px] text-[13px] text-Gray600 font-medium w-full"
              dangerouslySetInnerHTML={formatDescription(items[key].description)}
            />
          </div>
        ))}
      </div>
      <div
        className={`grid w-full grid-cols-2 gap-2 px-[24px] overflow-hidden transition-max-height duration-500 ease-in-out ${showAll ? 'max-h-[300px] mt-[7px]' : 'max-h-0'}`}
        ref={contentRef}
      >
        {extraItems.map((key) => (
          <div
            key={key}
            className="bg-GrayOpacity100 w-full min-h-[128px] rounded-[10px] flex flex-col px-[20px] py-[15px] gap-[8px]"
          >
            <img className="w-[24px] h-[24px]" src={guideDetailIconMap[key]} alt="아이콘" />
            <h3 className="text-Gray900 text-[15px] font-semibold">{items[key].title}</h3>
            <p
              className="mt-[8px] text-[13px] text-Gray600 font-medium w-full"
              dangerouslySetInnerHTML={formatDescription(items[key].description)}
            />
          </div>
        ))}
      </div>
      {/* 더보기 버튼 */}
      {keys.length > initialItemsToShow && (
        <div
          className={`flex justify-center w-full border-t transition-transform duration-300 mt-0`}
          onClick={() => setShowAll((prev) => !prev)}
        >
          <button className="px-4 py-[16px] font-medium text-Gray700 flex items-center">
            <p>{showAll ? '접기' : '더보기'}</p>
            <img
              className={`w-[24px] h-[24px] transition-transform duration-700 ${
                showAll ? 'rotate-180' : 'rotate-0'
              }`}
              src={seeMoreBtnIcon}
              alt={showAll ? '접기 버튼 아이콘' : '더보기 버튼 아이콘'}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default SimpleView;
