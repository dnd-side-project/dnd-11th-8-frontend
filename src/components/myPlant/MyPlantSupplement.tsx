import FilterButton from './FilterButton';

interface MyPlantSupplementProps {
  plants: Array<{
    myPlantId: number;
    nickname: string;
    scientificName: string;
    image: string;
    waterRemainDay: number;
    fertilizerRemainDay: number;
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
