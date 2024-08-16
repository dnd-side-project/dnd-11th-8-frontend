import { useSearchPlant } from '@/queries/useSearchPlant.ts';
import List from '@/components/common/List';
import GreenRoundPlusIcon from '@/assets/icon/GreenRoundPlusIcon.tsx';
import { usePlantTypeSearchParams } from '@/hooks/usePlantTypeSearchParams.ts';
import RoundedGreenChecked from '@/assets/icon/RoundedGreenChecked.tsx';
import useToast from '@/hooks/useToast';
import { JSX } from 'react';
import EmptyListIcon from '@/assets/icon/empty-list-icon.tsx';

interface SearchedPlantListProps {
  query: string;
  onClose: () => void;
}

const SearchedPlantList = ({ query, onClose }: SearchedPlantListProps) => {
  const response = useSearchPlant(query);
  const { setPlantType, plantType } = usePlantTypeSearchParams();
  const { openToast } = useToast();

  console.log(query);

  const data = response.data;

  const onClick = (name: string, id: number) => {
    setPlantType(name, id.toString());
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

  let content: JSX.Element | JSX.Element[] | null;

  if (query === '') {
    content = null;
  } else if (response.data.length === 0) {
    content = (
      <div className="mt-[80px] flex flex-col items-center w-full">
        <EmptyListIcon />
        <p className={'text-large-title font-semibold mt-[25px] mb-[10px]'}>앗..</p>
        <p className={'text-center text-small-body text-Gray500 font-medium'}>
          검색 결과가 없어요
          <br />곧 다양한 식물이 추가될 예정이예요
        </p>
      </div>
    );
  } else {
    content = data.map((plant) => (
      <List
        name={plant.name}
        image={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhKx2Fwr5Y8BEdj-CjHu5beloCcpqRVg6uJpTK6yH9vtSz_I9o'
        }
        key={`SearchedPlantList-${plant.plantId}`}
        trailingIcon={
          <button type={'button'} onClick={() => onClick(plant.name, plant.plantId)}>
            <GreenRoundPlusIcon checked={plantType === plant.name} />
          </button>
        }
        padding={'medium'}
      />
    ));
  }

  return <ul>{content}</ul>;
};

export default SearchedPlantList;
