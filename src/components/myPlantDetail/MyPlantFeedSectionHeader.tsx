import { Link } from 'react-router-dom';
import rightArrow from '@/assets/icon/right-arrow-gray-700.svg';

interface MyPlantFeedSectionHeaderProps {
  myPlantId: number;
}

const MyPlantFeedSectionHeader = ({ myPlantId }: MyPlantFeedSectionHeaderProps) => {
  return (
    <header className={'relative flex flex-row justify-between items-center'}>
      <h2 className={'text-[18px] leading-[26px] font-bold'}>내 식물 정보</h2>
      <Link to={`/my-plant/${myPlantId}/feed`} className={'flex flex-row gap-2 items-center'}>
        <span className={'text-Gray700 text-[15px] font-semibold'}>전체 보기</span>
        <img src={rightArrow} alt={'전체보기 왼쪽 꺽쇠 아이콘'} />
      </Link>
    </header>
  );
};

export default MyPlantFeedSectionHeader;
