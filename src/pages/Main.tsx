import BloomingWeather from '@/components/main/BloomingWeather';
import MainLayout from '@/components/main/MainLayout';
import MyPlant from '@/components/main/MyPlant';
import TabBar from '@/components/main/TabBar';

const Main = () => {
  const register: boolean = true;
  return (
    <MainLayout register={register}>
      <MyPlant register={register} />
      <BloomingWeather register={register} />
      <TabBar />
    </MainLayout>
  );
};

export default Main;
