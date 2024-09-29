import Screen from '@/layouts/Screen.tsx';
import { Link, useParams } from 'react-router-dom';
import Header from '@/components/common/Header';
import 왼쪽꺽쇠 from '@/assets/icon/left-arrow.svg?react';
import useInternalRouter from '@/hooks/useInternalRouter.ts';
import PlantImageCarousel from '@/components/myPlantDetail/PlantImageCarousel.tsx';
import PlantInfo from '@/components/myPlantDetail/PlantInfo';
import Separator from '@/components/common/Separator';
import NotificationToggleList from '@/components/addPlant/NotificationToggleList.tsx';
import MyPlantInfo from '@/components/myPlantDetail/MyPlantInfo.tsx';
import { useGetMyPlantDetail } from '@/queries/useGetMyPlantDetail.ts';
import { useUpdateMyPlantAlarm } from '@/queries/useUpdateMyPlantAlarm.ts';
import { parseIdParams } from '@/utils/params/parseIdParams.ts';
import { UpdateMyPlantAlarmParams } from '@/apis/myPlant/updateMyPlantAlarm.ts';
import { useGetRecommendedPeriod } from '@/queries/useGetRecommendedPeriod.ts';
import MyPlantFeed from '@/components/myPlantDetail/MyPlantFeed.tsx';
import { withDefaultAsyncBoundary } from '@/utils/asyncBoundary/withDefaultAsyncBoundary.tsx';

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
  const { mutate: updateMyPlantAlarm } = useUpdateMyPlantAlarm(parseIdParams(plantId));
  const { data: recommendedPeriod } = useGetRecommendedPeriod(parseIdParams(plantId) ?? null);

  if (!plantId) {
    throw Error('잘못된 식물 입니다.');
  }

  const handleNotificationEnabledChange = (enabled: boolean) => {
    if (!enabled) {
      updateMyPlantAlarm({
        waterAlarm: false,
        fertilizerAlarm: false,
        healthCheckAlarm: false,
      });
    }
  };

  const handleUpdateMyPlantAlarm = (
    type: keyof UpdateMyPlantAlarmParams['body'],
    value: boolean | number,
  ) => {
    updateMyPlantAlarm({
      [type]: value,
    });
  };

  return (
    <Screen className={'pb-8'}>
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
          location: data.location.name,
          species: data.scientificName,
        }}
      />
      <Separator height={10} bottomMargin={32} />
      <NotificationToggleList
        onNotificationEnabledChange={handleNotificationEnabledChange}
        water={{
          checked: data.waterAlarm,
          title: '물주기',
          period: data.waterPeriod,
        }}
        setWaterAlarm={(value) => handleUpdateMyPlantAlarm('waterAlarm', value)}
        setWaterPeriod={(value) => handleUpdateMyPlantAlarm('waterPeriod', value)}
        fertilizer={{
          checked: data.fertilizerAlarm,
          title: '비료주기',
          period: data.fertilizerPeriod,
        }}
        setFertilizerAlarm={(value) => handleUpdateMyPlantAlarm('fertilizerAlarm', value)}
        setFertilizerPeriod={(value) => handleUpdateMyPlantAlarm('fertilizerPeriod', value)}
        healthCheck={{
          checked: data.healthCheckAlarm,
          title: '건강체크',
          period: null,
        }}
        setHealthCheckAlarm={(value) => handleUpdateMyPlantAlarm('healthCheckAlarm', value)}
        recommendedWaterPeriod={recommendedPeriod?.recommendedWaterDay}
        recommendedFertilizerPeriod={recommendedPeriod?.recommendedFertilizerWeek}
        labelAsTitle={true}
      />
      <MyPlantInfo
        lastFertilizerInfo={data.lastFertilizerInfo}
        lastFertilizerTitle={data.lastFertilizerTitle}
        lastWateredInfo={data.lastWateredInfo}
        lastWateredTitle={data.lastWateredTitle}
      />
      <Separator height={10} bottomMargin={32} />
      <MyPlantFeed myPlantId={+plantId} images={data.images} />
    </Screen>
  );
};

export default withDefaultAsyncBoundary(MyPlantDetail);
