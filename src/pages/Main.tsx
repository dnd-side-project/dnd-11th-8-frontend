import { getToken } from 'firebase/messaging';
import { messaging } from '@/libs/firebase';

import BloomingWeather from '@/components/main/BloomingWeather';
import MyPlant from '@/components/main/MyPlant';
import TabBar from '@/components/main/TabBar';
import Screen from '@/layouts/Screen';
import HeightBox from '@/components/common/HeightBox';
import { useCallback, useEffect } from 'react';
import useToast from '@/hooks/useToast.tsx';
import { useGetHomeData } from '@/queries/useGetHomeData.ts';
import { withAsyncBoundary } from '@toss/async-boundary';
import ErrorPage from '@/pages/ErrorPage.tsx';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';

const Main = () => {
  const { openToast } = useToast();
  const { data: homeData } = useGetHomeData();

  const register = homeData.myPlantInfo.length === 0;

  const requestPermission = useCallback(async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_VAPID_KEY,
      });
      console.log('token: ', token);
      return;
    }

    if (localStorage.getItem('isNotificationDenied') === 'true') {
      return;
    }

    openToast({
      message: '알림이 거부되었습니다. 알림을 받으려면 브라우저 설정에서 허용해주세요.',
    });
    localStorage.setItem('isNotificationDenied', 'true');
  }, [openToast]);

  useEffect(() => {
    void requestPermission();
  }, [requestPermission]);

  return (
    <Screen className="bg-Gray50 min-h-dvh">
      <MyPlant
        register={register}
        myPlantsInfo={homeData.myPlantInfo}
        greetingMessage={homeData.greetingMessage}
      />
      <BloomingWeather register={register} />
      <HeightBox height={100} />
      <TabBar />
    </Screen>
  );
};

export default withAsyncBoundary(Main, {
  rejectedFallback: ({ error, reset }) => {
    return <ErrorPage reset={reset} error={error} />;
  },
  pendingFallback: <LoadingSpinner />,
});
