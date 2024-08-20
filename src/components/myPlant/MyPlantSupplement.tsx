import FilterButton from './FilterButton';

interface MyPlantSupplementProps {
  plants: Array<{
    myPlantId: number;
    nickname: string;
    scientificName: string;
    haveLocation: boolean; //false 이면 분류없음
    imageUrl: string;
    dateSinceLastWater: number | null; //null 이면 기록없음
    dateSinceLastFertilizer: number | null; //null 이면 기록없음
    dateSinceLasthealthCheck: number | null;
  }>;
}

const MyPlantSupplement: React.FC<MyPlantSupplementProps> = ({ plants }) => {
  return (
    <div className="flex justify-between px-[20px] py-[12px]">
      <p className="text-[15px] text-Gray800 font-normal">
        전체 <span className="font-semibold ">({plants.length})</span>
      </p>
      <FilterButton />
    </div>
  );
};

export default MyPlantSupplement;
