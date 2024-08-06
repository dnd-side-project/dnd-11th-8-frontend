import myPlant from '@/assets/img/examMyPlant.svg';
import AlimCheck from './AlimCheck';

const MyPlantAlimCheck = () => {
  return (
    <div className="relative">
      <div className="absolute bottom-[calc(100%+15px)] left-1/2 transform -translate-x-1/2">
        <img src={myPlant} alt="나의 식물 일러스트" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="pt-[10px]">루밍이</p>
        <p>몬스테라 델리사오사</p>
        <div>함께한지 1일</div>
      </div>
      <div className="mx-[22px]">
        <AlimCheck />
      </div>
    </div>
  );
};

export default MyPlantAlimCheck;
