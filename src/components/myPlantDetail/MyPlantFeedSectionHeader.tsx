import { Link } from 'react-router-dom';
import RightArrow from '@/assets/icon/right-arrow-gray-700.svg?react';

interface MyPlantFeedSectionHeaderProps {
  myPlantId: number;
}

const MyPlantFeedSectionHeader = ({ myPlantId }: MyPlantFeedSectionHeaderProps) => {
  return (
    <header className={'relative flex flex-row justify-between items-center'}>
      <h2 className={'text-[18px] leading-[26px] font-bold'}>내 식물 정보</h2>
      <Link to={`/my-plant/${myPlantId}/feed`} className={'flex flex-row gap-2 items-center'}>
        <span className={'text-Gray700 text-[15px] font-semibold'}>전체 보기</span>
        <RightArrow />
      </Link>
    </header>
  );
};

export default MyPlantFeedSectionHeader;
