import BloomingWeather from '@/components/main/BloomingWeather';
import MainLayout from '@/components/main/MainLayout';
import MyPlant from '@/components/main/MyPlant';
import TabBar from '@/components/main/TabBar';
import Screen from '@/layouts/Screen';

const Main = () => {
  const register: boolean = true;
  return (
    <Screen className="px-0">
      <MainLayout register={register}>
        <MyPlant register={register} />
        <BloomingWeather register={register} />
        <TabBar />
      </MainLayout>
    </Screen>
  );
};

export default Main;
