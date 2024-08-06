import myPlant from '@/assets/img/examMyPlant.svg';
import AlimCheck from './AlimCheck';
import heart from '@/assets/icon/heart.svg';

const MyPlantAlimCheck = () => {
  return (
    <div className="relative">
      <div className="absolute bottom-[calc(100%-15px)] left-1/2 transform -translate-x-1/2">
        <img src={myPlant} alt="나의 식물 일러스트" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="pt-[27.9px] text-Gray900 font-semibold text-[22px]">루밍이</p>
        <p className="text-Gray600 font-medium text-[13px]">몬스테라 델리사오사</p>
        <div className="flex mt-[10px] gap-[5px] px-[8px] py-[4px] border border-GrayOpacity100 rounded-full bg-Gray50">
          <img src={heart} alt="하트 아이콘" />
          <p className="text-small-writing text-Gray800">함께한지 1일</p>
        </div>
      </div>
      <div className="mx-[22px] mt-[15px] mb-[27px]">
        <AlimCheck />
      </div>
    </div>
  );
};

export default MyPlantAlimCheck;
