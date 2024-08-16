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

const images = [
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export const plantInfo = {
  nickname: '루밍이',
  species: '몬스테라 델리오사',
  plantId: 1,
  location: '테라스',
};

const initialNotificationForm = {
  water: {
    title: '물주기',
    period: 0,
    checked: false,
  } as ToggleFormState,
  fertilizer: {
    title: '비료주기',
    period: 0,
    checked: false,
  } as ToggleFormState,
  healthCheck: {
    title: '건강체크',
    period: null,
    checked: false,
  } as ToggleFormState,
};

const MyPlantDetail = () => {
  const router = useInternalRouter();
  const { plantId } = useParams();
  const [water, setWater] = useState(initialNotificationForm.water);
  const [fertilizer, setFertilizer] = useState(initialNotificationForm.fertilizer);
  const [healthCheck, setHealthCheck] = useState(initialNotificationForm.healthCheck);

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
            to={'/my-plant/edit/:plantId'}
          >
            편집
          </Link>
        }
      />
      <PlantImageCarousel images={images} />
      <PlantInfo plantInfo={plantInfo} />
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
      <MyPlantInfo fertilizerCycle={1} lastWateredDate={'2024-03-20'} lastWateredDaysAgo={14} />
      <Separator height={10} />
    </Screen>
  );
};

export default MyPlantDetail;
