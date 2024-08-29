import { getToken } from 'firebase/messaging';
import { messaging } from '@/libs/firebase';

import BloomingWeather from '@/components/main/BloomingWeather';
import MyPlant from '@/components/main/MyPlant';
import TabBar from '@/components/main/TabBar';
import Screen from '@/layouts/Screen';
import HeightBox from '@/components/common/HeightBox';
import { useEffect } from 'react';

const Main = () => {
  const register: boolean = true;

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_VAPID_KEY,
      });
      console.log(token);
    } else {
      console.log('Notification permission denied.');
    }
  };

  useEffect(() => {
    void requestPermission();
  }, []);

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
