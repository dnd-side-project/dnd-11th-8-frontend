import { useSearchPlant } from '@/queries/useSearchPlant.ts';
import List from '@/components/common/List';
import GreenRoundPlusIcon from '@/assets/icon/GreenRoundPlusIcon.tsx';
import { usePlantTypeSearchParams } from '@/hooks/usePlantTypeSearchParams.ts';
import RoundedGreenChecked from '@/assets/icon/RoundedGreenChecked.tsx';
import useToast from '@/hooks/useToast';

interface SearchedPlantListProps {
  query: string;
  onClose: () => void;
}

const SearchedPlantList = ({ query, onClose }: SearchedPlantListProps) => {
  const response = useSearchPlant();
  const { setPlantType, plantType } = usePlantTypeSearchParams();
  const { openToast } = useToast();

  let data = response.data;

  if (query === '') {
    data = [];
  } else {
    data = data.filter((plant) => plant.name.includes(query));
  }

  const onClick = (name: string) => {
    setPlantType(name);
    onClose();
    openToast({
      message: (
        <div
          className={
            'flex flex-row items-center justify-center w-full gap-2 text-small-body font-medium text-white'
          }
        >
          <RoundedGreenChecked />
          <span className={''}>내 식물로 추가 되었습니다.</span>
        </div>
      ),
      duration: 1000,
    });
  };

  return (
    <ul>
      {data.map((plant) => (
        <List
          name={plant.name}
          image={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhKx2Fwr5Y8BEdj-CjHu5beloCcpqRVg6uJpTK6yH9vtSz_I9o'
          }
          key={`SearchedPlantList-${plant.plantId}`}
          trailingIcon={
            <button type={'button'} onClick={() => onClick(plant.name)}>
              <GreenRoundPlusIcon checked={plantType === plant.name} />
            </button>
          }
          padding={'medium'}
        />
      ))}
    </ul>
  );
};

export default SearchedPlantList;
