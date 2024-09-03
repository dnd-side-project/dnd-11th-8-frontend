import SegmentControl from '@/components/common/SegmentControl';
import TabBar from '@/components/main/TabBar';
import MyPlantList from '@/components/myPlant/MyPlantList';
import MyPlantSupplement from '@/components/myPlant/MyPlantSupplement';
import NoMyPlant from '@/components/myPlant/NoMyPlant';
import PlusButton from '@/components/myPlant/PlusButton';
import { useState } from 'react';
import Screen from '@/layouts/Screen';
import { useGetAllLocation } from '@/queries/useGetAllLocation.ts';
import { withAsyncBoundary } from '@toss/async-boundary';
import ErrorPage from '@/pages/ErrorPage.tsx';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';
import { useGetAllMyPlant } from '@/queries/useGetAllMyPlant.ts';
import { PlantLocation } from '@/types/plantLocation';
import { useAtom } from 'jotai';
import filterQueryAtom from '@/atoms/myPlant/filterQueryAtom';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import Plant from '@/types/MyPlant.ts';

const defaultLocation: PlantLocation = {
  id: -1,
  name: '전체',
};

const MyPlant = () => {
  const { data: segments } = useGetAllLocation();

  const [bgColor, setBgColor] = useState('');

  const [location, setLocation] = useState<PlantLocation>(defaultLocation);
  const [sort] = useAtom(filterQueryAtom);

  const { data, isLoading, isError, error } = useGetAllMyPlant();

  let myPlant: Plant[] = [];

  if (data) {
    myPlant = data;
  }

  if (location.id !== -1) {
    myPlant = myPlant.filter((plant) => plant.locationId === location.id);
  }

  switch (sort) {
    case 'created_asc':
      myPlant.sort(
        (a, b) => new Date(a.registerDate).getTime() - new Date(b.registerDate).getTime(),
      );
      break;
    case 'created_desc':
      myPlant.sort(
        (a, b) => new Date(b.registerDate).getTime() - new Date(a.registerDate).getTime(),
      );
      break;
    case 'no_location':
      myPlant = myPlant.filter((plant) => !plant.haveLocation);
      break;
  }

  const handleOptionClick = () => {
    setBgColor('bg-SementicDimBackground');
  };

  const handleCloseOverlay = () => {
    setBgColor('');
  };

  const handleSegmentChange = (selectedSegment: { id: number; name: string }) => {
    setLocation(selectedSegment);
  };

  if (isError) {
    throw new Error(error?.message);
  }

  let content = <NoMyPlant />;

  if (isLoading) {
    content = (
      <div className="flex gap-[16px] px-[20px] py-[16px]">
        <Skeleton className="w-[80px] flex-shrink-0 h-[80px] rounded-[10px]" />
        <Skeleton className={'w-full h-[80px]'} />
      </div>
    );
  } else if (myPlant?.length) {
    content = <MyPlantList plants={myPlant} />;
  }

  return (
    <Screen className="px-0 ">
      <div className="min-h-screen ">
        {/* 배경색 오버레이 */}
        {bgColor && (
          <div className={`fixed inset-0 z-30 ${bgColor}`} onClick={handleCloseOverlay} />
        )}

        <div className="">
          <div className="pt-[30px]">
            <SegmentControl segments={segments} onSegmentChange={handleSegmentChange} />
          </div>
          <MyPlantSupplement length={myPlant?.length} />
          {content}
          <PlusButton
            onOptionClick={handleOptionClick}
            onCloseOverlay={handleCloseOverlay}
            locationName={location?.name}
            locationId={location?.id}
          />
          <TabBar />
        </div>
      </div>
    </Screen>
  );
};

export default withAsyncBoundary(MyPlant, {
  rejectedFallback: ({ error, reset }) => <ErrorPage error={error} reset={reset} />,
  pendingFallback: <LoadingSpinner />,
});
