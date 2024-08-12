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
      <p>전체 ({plants.length})</p>
      <FilterButton />
    </div>
  );
};

export default MyPlantSupplement;
