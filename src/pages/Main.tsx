import { getToken } from 'firebase/messaging';
import { messaging } from '@/libs/firebase';

import BloomingWeather from '@/components/main/BloomingWeather';
import MyPlant from '@/components/main/MyPlant';
import TabBar from '@/components/main/TabBar';
import Screen from '@/layouts/Screen';
import HeightBox from '@/components/common/HeightBox';
import { useCallback, useEffect } from 'react';
import useToast from '@/hooks/useToast.tsx';

const Main = () => {
  const { openToast } = useToast();
  const register: boolean = true;

  const requestPermission = useCallback(async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_VAPID_KEY,
      });
      console.log('token: ', token);
    } else {
      openToast({
        message: '알림이 거부되었습니다. 알림을 받으려면 브라우저 설정에서 허용해주세요.',
      });
    }
  }, [openToast]);

  useEffect(() => {
    void requestPermission();
  }, [requestPermission]);

  return (
    <Screen className="bg-Gray50 min-h-dvh">
      <MyPlant register={register} />
      <BloomingWeather register={register} />
      <HeightBox height={100} />
      <TabBar />
    </Screen>
  );
};

export default Main;
