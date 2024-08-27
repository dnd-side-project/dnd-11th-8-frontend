import BloomingWeather from '@/components/main/BloomingWeather';
import MyPlant from '@/components/main/MyPlant';
import TabBar from '@/components/main/TabBar';
import Screen from '@/layouts/Screen';
import HeightBox from '@/components/common/HeightBox';

const Main = () => {
  const register: boolean = true;
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
