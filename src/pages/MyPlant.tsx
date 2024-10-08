import SegmentControl from '@/components/common/SegmentControl';
import TabBar from '@/components/main/TabBar';
import MyPlantList from '@/components/myPlant/MyPlantList';
import MyPlantSupplement from '@/components/myPlant/MyPlantSupplement';
import NoMyPlant from '@/components/myPlant/NoMyPlant';
import PlusButton from '@/components/myPlant/PlusButton';
import { useState } from 'react';
import Screen from '@/layouts/Screen';
import { useGetAllLocation } from '@/queries/useGetAllLocation.ts';
import { useGetAllMyPlant } from '@/queries/useGetAllMyPlant.ts';
import { PlantLocation } from '@/types/plantLocation';
import { useAtom } from 'jotai';
import filterQueryAtom from '@/atoms/myPlant/filterQueryAtom';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import { withDefaultAsyncBoundary } from '@/utils/asyncBoundary/withDefaultAsyncBoundary.tsx';

const defaultLocation: PlantLocation = {
  id: -1,
  name: '전체',
};

const MyPlant = () => {
  const { data: segments } = useGetAllLocation();

  const [location, setLocation] = useState<PlantLocation>(defaultLocation);
  const [sort] = useAtom(filterQueryAtom);

  const { data, isLoading, isError, error } = useGetAllMyPlant({
    locationId: location.id,
    sort,
  });

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
  } else if (data?.length) {
    content = <MyPlantList plants={data} />;
  }

  return (
    <Screen className="px-0 ">
      <div className="min-h-screen ">
        <div className="">
          <div className="pt-[30px]">
            <SegmentControl segments={segments} onSegmentChange={handleSegmentChange} />
          </div>
          <MyPlantSupplement length={data?.length} />
          {content}
          <PlusButton locationName={location?.name} locationId={location?.id} />
          <TabBar />
        </div>
      </div>
    </Screen>
  );
};

export default withDefaultAsyncBoundary(MyPlant);
