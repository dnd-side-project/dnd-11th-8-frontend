import fertilizerIcon from '@/assets/icon/fertilizer.svg';
import waterIcon from '@/assets/icon/water.svg';

interface MyPlantInfoProps {
  fertilizerCycle: number;
  lastWateredDate: string;
  lastWateredDaysAgo: number;
}

const MyPlantInfo = ({
  lastWateredDaysAgo,
  lastWateredDate,
  fertilizerCycle,
}: MyPlantInfoProps) => {
  return (
    <div className={'mt-[42px] w-full'}>
      <header className={'text-[18px] leading-[26px] font-bold'}>내 식물 정보</header>
      <div className={'grid grid-cols-2 mt-[18px] gap-[7px]'}>
        <div className={'py-[15px] px-[20px] rounded-[10px] bg-Gray100'}>
          <img src={fertilizerIcon} alt={'비료'} />
          <div className={'mt-[8px] text-[15px] font-semibold leading-[24px]'}>비료 주기</div>
          <div className={'mt-[3px] text-small-writing text-Gray600 font-medium'}>
            {fertilizerCycle}개월 이내
          </div>
        </div>
        <div className={'py-[15px] px-[20px] rounded-[10px] bg-Gray100'}>
          <img src={waterIcon} alt={'비료'} />
          <div className={'mt-[8px] text-[15px] font-semibold leading-[24px]'}>
            마지막으로 물 준 날
          </div>
          <div className={'mt-[3px] text-small-writing text-Gray600 font-medium'}>
            {lastWateredDate}
          </div>
          <div className={'mt-[3px] text-small-writing text-Gray600 font-medium'}>
            {lastWateredDaysAgo}일전
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlantInfo;
