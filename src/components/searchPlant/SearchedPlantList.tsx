import { useSearchPlant } from '@/queries/useSearchPlant.ts';
import List from '@/components/common/List';
import GreenRoundPlusIcon from '@/assets/icon/GreenRoundPlusIcon.tsx';
import { usePlantTypeSearchParams } from '@/hooks/usePlantTypeSearchParams.ts';
import RoundedGreenChecked from '@/assets/icon/RoundedGreenChecked.tsx';
import useToast from '@/hooks/useToast';
import { JSX, useState } from 'react';
import EmptyListIcon from '@/assets/icon/empty-list-icon.tsx';
import CTAButton from '@/components/common/CTAButton';
import HeightBox from '@/components/common/HeightBox';
import PlusGreen from '@/assets/icon/PlusGreen.svg';
import CenterBottomSheet from '@/components/common/CenterBottomSheet';
import TextFieldV2 from '@/components/common/TextFieldV2';
import ListSkeleton from '@/components/common/Skeleton/ListSkeleton.tsx';

interface SearchedPlantListProps {
  query: string;
  onClose: () => void;
}

const SearchedPlantList = ({ query, onClose }: SearchedPlantListProps) => {
  const { data, isLoading } = useSearchPlant(query);
  const { setPlantType, plantType } = usePlantTypeSearchParams();
  const { openToast } = useToast();

  const [customPlant, setCustomPlant] = useState('');

  const [open, setOpen] = useState(false);

  const onClick = (name: string, id?: number) => {
    setPlantType(name, id);
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

  if (isLoading) {
    return <ListSkeleton />;
  }

  let content: JSX.Element | JSX.Element[] | null | undefined;

  if (query === '') {
    content = null;
  } else if (data?.length === 0) {
    content = (
      <div className="mt-[80px] flex flex-col items-center w-full">
        <EmptyListIcon />
        <p className={'text-large-title font-semibold mt-[25px] mb-[10px]'}>앗..</p>
        <p className={'text-center text-small-body text-Gray500 font-medium'}>
          검색 결과가 없어요
          <br />곧 다양한 식물이 추가될 예정이예요
        </p>
        <HeightBox height={20} />
        <CTAButton
          type={'button'}
          text={'직접 추가하기'}
          className={
            'border-[1.5px] border-BloomingGreen500 bg-white text-BloomingGreen500 flex flex-row items-center gap-2.5'
          }
          icon={PlusGreen}
          onClick={() => setOpen(true)}
        />
        <CenterBottomSheet
          title={'직접 추가하기'}
          content={
            <div className={'px-3.5'}>
              <TextFieldV2 value={customPlant} onChange={(e) => setCustomPlant(e.target.value)} />
            </div>
          }
          actions={[
            <CTAButton
              text={'등록'}
              type={'button'}
              className={'bg-BloomingGreen500 disabled:bg-Gray500'}
              disabled={customPlant === ''}
              onClick={() => onClick(customPlant)}
            />,
          ]}
          isOpen={open}
          onOpenChange={(value) => {
            setCustomPlant('');
            setOpen(value);
          }}
          headerAsLabel={true}
        />
      </div>
    );
  } else {
    content = data?.map((plant) => (
      <List
        name={plant.name}
        image={plant.imageUrl}
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
