import BloomingWeather from '@/components/main/BloomingWeather';
import MainLayout from '@/components/main/MainLayout';
import MyPlant from '@/components/main/MyPlant';
import MyPlantRegistration from '@/components/main/MyPlantRegistration';

const Main = () => {
  return (
    <MainLayout>
      <MyPlant />
      <MyPlantRegistration />
      <BloomingWeather />
    </MainLayout>
  );
};

export default Main;
