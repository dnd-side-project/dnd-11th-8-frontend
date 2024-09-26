import RegisterMyPlant from './RegisterMyPlant';
import MyPlantAlimCheck from './MyPlantAlimCheck';
import MyPlantRegistration from './MyPlantRegistration';
import Logo from '@/assets/icon/logo.svg?react';
import AppBar from '@/components/main/AppBar.tsx';
import { GetHomeScreenDataResponse } from '@/apis/home/getHomeScreenData.ts';

interface MyPlantProps {
  register: boolean;
  myPlantsInfo: GetHomeScreenDataResponse['myPlantInfo'];
  greetingMessage: string;
}

const MyPlant: React.FC<MyPlantProps> = ({ register, myPlantsInfo, greetingMessage }) => {
  return (
    <>
      <div className="px-[22px] bg-[#F2F1E5] -mx-6">
        <AppBar logo={<Logo />} />

        {register ? (
          <RegisterMyPlant greetingMessage={greetingMessage} />
        ) : (
          <div className="text-small-title text-Gray900 pt-[36.1px] pb-[30.3px] whitespace-pre-wrap">
            {greetingMessage}
          </div>
        )}
      </div>
      {register ? <MyPlantAlimCheck plants={myPlantsInfo} /> : <MyPlantRegistration />}
    </>
  );
};

export default MyPlant;
