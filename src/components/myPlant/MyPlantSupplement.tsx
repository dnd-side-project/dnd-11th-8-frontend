import FilterButton from './FilterButton';

interface MyPlantSupplementProps {
  length?: number | '_';
}

const MyPlantSupplement: React.FC<MyPlantSupplementProps> = ({ length = '_' }) => {
  return (
    <div className="flex justify-between px-[20px] py-[12px]">
      <p className="text-[15px] text-Gray800 font-normal">
        전체 <span className="font-semibold ">({length})</span>
      </p>
      <FilterButton />
    </div>
  );
};

export default MyPlantSupplement;
