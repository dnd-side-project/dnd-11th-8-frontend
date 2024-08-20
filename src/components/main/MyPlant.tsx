import nonUser from '@/assets/icon/nonUser.svg';
import RegisterMyPlant from './RegisterMyPlant';
import MyPlantAlimCheck from './MyPlantAlimCheck';
import MyPlantRegistration from './MyPlantRegistration';
import plant from '@/assets/img/examMyPlant.svg';
import { useEffect, useState } from 'react';
import logo from '@/assets/icon/logo.svg';
import useInternalRouter from '@/hooks/useInternalRouter';

interface MyPlantProps {
  register: boolean;
}

interface Plant {
  myPlantId: number;
  nickname: string;
  scientificName: string;
  haveLocation: boolean;
  imageUrl: string;
  dateSinceLastWater: number | null;
  dateSinceLastFertilizer: number | null;
  dateSinceLasthealthCheck: number | null;
}

const MyPlant: React.FC<MyPlantProps> = ({ register }) => {
  const { push } = useInternalRouter();
  // 데이터 받아오면 제거할 예정
  const [greetingMessage, setGreetingMessage] = useState<string>('');
  const [myPlantsInfo, setMyPlantsInfo] = useState<Plant[]>([]);

  // 데이터 받아오면 제거할 예정
  useEffect(() => {
    const myPlants = {
      greetingMessage: '김루밍님 좋아요!\n초보식집사로서 멋진 데뷔네요.',
      myPlantsInfo: [
        {
          myPlantId: 1,
          nickname: '쫑쫑이',
          scientificName: '몬스테라 델리오사',
          haveLocation: false, //false 이면 분류없음
          imageUrl: plant,
          dateSinceLastWater: 3, //null 이면 기록없음
          dateSinceLastFertilizer: 23, //null 이면 기록없음
          dateSinceLasthealthCheck: 3,
        },
        {
          myPlantId: 2,
          nickname: '뿡뿡이',
          scientificName: '병아리눈물',
          haveLocation: true, //false 이면 분류없음
          imageUrl: plant,
          dateSinceLastWater: 3, //null 이면 기록없음
          dateSinceLastFertilizer: 23, //null 이면 기록없음
          dateSinceLasthealthCheck: 3,
        },
      ],
    };

    const { greetingMessage, myPlantsInfo } = myPlants;

    setGreetingMessage(greetingMessage);
    setMyPlantsInfo(myPlantsInfo);
  }, []);

  return (
    <div className={`bg-[#F2F1E5] ${register ? 'h-[410px]' : 'h-[169.81px]'} `}>
      <div className="px-[22px]">
        <div className="pt-[21.3px] flex justify-between">
          <img src={logo} alt="로고" />
          <div>
            <img src={nonUser} alt="프로필이 없는 유저" onClick={() => push('/profile')} />
          </div>
        </div>

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
    </div>
  );
};

export default MyPlant;
