import nonUser from '@/assets/icon/nonUser.svg';
import RegisterMyPlant from './RegisterMyPlant';
import MyPlantAlimCheck from './MyPlantAlimCheck';
import MyPlantRegistration from './MyPlantRegistration';
import logo from '@/assets/icon/logo.svg';
import AppBar from '@/components/main/AppBar.tsx';
import Plant from '@/types/MyPlant.ts';

interface MyPlantProps {
  register: boolean;
  myPlantsInfo: Plant[];
  greetingMessage: string;
}

const MyPlant: React.FC<MyPlantProps> = ({ register, myPlantsInfo, greetingMessage }) => {
  return (
    <>
      <div className="px-[22px] bg-[#F2F1E5] -mx-6">
        <AppBar logo={logo} profileImage={nonUser} />

        {register ? (
          <RegisterMyPlant greetingMessage={greetingMessage} />
        ) : (
          <div className="text-small-title text-Gray900 pt-[36.1px] pb-[30.3px]">
            <p>김루밍님</p>
            <p>블루밍에 오신걸 환영해요</p>
          </div>
        )}
      </div>
      {register ? <MyPlantAlimCheck plants={myPlantsInfo} /> : <MyPlantRegistration />}
    </>
  );
};

export default MyPlant;
