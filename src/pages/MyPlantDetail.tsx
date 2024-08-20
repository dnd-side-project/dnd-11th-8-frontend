import Screen from '@/layouts/Screen.tsx';
import { Link, useParams } from 'react-router-dom';
import Header from '@/components/common/Header';
import 왼쪽꺽쇠 from '@/assets/icon/왼쪽꺽쇠';
import useInternalRouter from '@/hooks/useInternalRouter.ts';
import PlantImageCarousel from '@/components/myPlantDetail/PlantImageCarousel.tsx';
import PlantInfo from '@/components/myPlantDetail/PlantInfo';
import Separator from '@/components/common/Separator';
import NotificationToggleList from '@/components/addPlant/NotificationToggleList.tsx';
import { ToggleFormState } from '@/pages/AddPlantPage.tsx';
import { useState } from 'react';
import MyPlantInfo from '@/components/myPlantDetail/MyPlantInfo.tsx';
import { useGetMyPlantDetail } from '@/queries/useGetMyPlantDetail.ts';
import { withAsyncBoundary } from '@toss/async-boundary';

export const plantInfo = {
  nickname: '루밍이',
  species: '몬스테라 델리오사',
  plantId: 1,
  location: '테라스',
};

const MyPlantDetail = () => {
  const router = useInternalRouter();
  const { plantId } = useParams();
  const { data } = useGetMyPlantDetail(Number(plantId));
  const [water, setWater] = useState<ToggleFormState>({
    title: '물주기',
    period: data.waterPeriod,
    checked: data.waterAlarm,
  });
  const [fertilizer, setFertilizer] = useState<ToggleFormState>({
    title: '비료주기',
    period: data.fertilizerPeriod,
    checked: data.fertilizerAlarm,
  });
  const [healthCheck, setHealthCheck] = useState<ToggleFormState>({
    title: '건강체크',
    period: null,
    checked: data.healthCheckAlarm,
  });

  if (!plantId) {
    throw Error('잘못된 식물 입니다.');
  }

  return (
    <Screen>
      <Header
        title={''}
        left={
          <button type={'button'} onClick={() => router.goBack()}>
            <왼쪽꺽쇠 />
          </button>
        }
        right={
          <Link
            className={'text-regular-body font-medium text-Gray500'}
            to={`/my-plant/edit/${plantId}`}
          >
            편집
          </Link>
        }
      />
      <PlantImageCarousel images={data.images} />
      <PlantInfo
        plantInfo={{
          plantId: data.plantId,
          nickname: data.nickname,
          location: data.location,
          species: data.scientificName,
        }}
      />
      <Separator height={10} />
      <NotificationToggleList
        water={water}
        setWater={(value) => setWater((prev) => ({ ...prev, ...value }))}
        fertilizer={fertilizer}
        setFertilizer={(value) => setFertilizer((prev) => ({ ...prev, ...value }))}
        healthCheck={healthCheck}
        setHealthCheck={(value) => setHealthCheck((prev) => ({ ...prev, ...value }))}
        labelAsTitle={true}
      />
      <MyPlantInfo
        lastFertilizerInfo={data.lastFertilizerInfo}
        lastFertilizerTitle={data.lastFertilizerTitle}
        lastWateredInfo={data.lastWateredInfo}
        lastWateredTitle={data.lastWateredTitle}
      />
      <Separator height={10} />
    </Screen>
  );
};

export default withAsyncBoundary(MyPlantDetail, {
  rejectedFallback: () => <div>에러가 발생했습니다.</div>,
  pendingFallback: <div>로딩 중...</div>,
});
