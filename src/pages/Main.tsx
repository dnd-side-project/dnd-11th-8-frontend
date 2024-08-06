import BloomingWeather from '@/components/main/BloomingWeather';
import MainLayout from '@/components/main/MainLayout';
import MyPlant from '@/components/main/MyPlant';
import MyPlantAlimCheck from '@/components/main/MyPlantAlimCheck';
import MyPlantRegistration from '@/components/main/MyPlantRegistration';
import TabBar from '@/components/main/TabBar';

const Main = () => {
  const register: boolean = true;
  return (
    <MainLayout>
      <MyPlant register={register} />
      {register ? <MyPlantAlimCheck /> : <MyPlantRegistration />}
      <BloomingWeather />
      <TabBar />
    </MainLayout>
  );
};

export default Main;
