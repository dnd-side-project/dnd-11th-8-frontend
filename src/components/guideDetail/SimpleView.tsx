import React, { useState } from 'react';
import GuideDetailsProps from '@/types/GuideDetailsProps';
import seeMoreBtnIcon from '@/assets/icon/guideDetailDownArrow.svg';

const SimpleView: React.FC<{ items: GuideDetailsProps['simpleView'] }> = ({ items }) => {
  const keys = Object.keys(items) as Array<keyof typeof items>;
  const [showAll, setShowAll] = useState(false);

  const initialItemsToShow = 4;
  const itemsToShow = showAll ? keys : keys.slice(0, initialItemsToShow);

  const formatDescription = (description: string) => {
    return { __html: description.replace(/\n/g, '<br />') };
  };

  return (
    <>
      <h1 className="px-[24px] py-[10px] text-LabelNormal text-[18px] font-bold	mt-[27.5px]">
        한 눈에 보는 식물 정보
      </h1>
      <div
        className={`grid w-full grid-cols-2 gap-2 px-[24px] mt-[7px] ${showAll ? 'mb-[40px]' : 'mb-0'}`}
      >
        {itemsToShow.map((key) => (
          <div
            key={key}
            className="bg-GrayOpacity100 w-full min-h-[128px] rounded-[10px] flex flex-col px-[20px] py-[15px] gap-[8px] "
          >
            <img className="w-[24px] h-[24px]" src={items[key].icon} alt="아이콘" />
            <h3 className="text-Gray900 text-[15px] font-semibold">{items[key].title}</h3>
            <p
              className="mt-[8px] text-[13px] text-Gray600 font-medium w-full"
              dangerouslySetInnerHTML={formatDescription(items[key].description)}
            />
          </div>
        ))}
      </div>
      {/* "더보기" 버튼 */}
      {!showAll && keys.length > initialItemsToShow && (
        <div className="flex justify-center w-full border-t " onClick={() => setShowAll(true)}>
          <button className="px-4 py-[16px] font-medium text-Gray700 ">
            <div className="flex items-center justify-center">
              <p>더보기</p>
              <img src={seeMoreBtnIcon} alt="더보기 버튼 아이콘" />
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default SimpleView;
