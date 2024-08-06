import nonUser from '@/assets/icon/nonUser.svg';
import RegisterMyPlant from './RegisterMyPlant';
import MyPlantAlimCheck from './MyPlantAlimCheck';
import MyPlantRegistration from './MyPlantRegistration';
import plant from '@/assets/img/examMyPlant.svg';

const myPlants = [
  {
    plantId: 1,
    name: '뿡뿡이',
    scientificName: '몬스테라 델리오사',
    image: plant,
    startDay: 1,
    waterDDay: 3,
    fertilizerDDay: 13,
    healthy: 2,
  },
  {
    plantId: 2,
    name: '팝팝이',
    scientificName: '병아리 눈물',
    image: plant,
    startDay: 4,
    waterDDay: 5,
    fertilizerDDay: 23,
    healthy: 7,
  },
  {
    plantId: 3,
    name: '뿡빵이',
    scientificName: '몬스테라 델리오사',
    image: plant,
    startDay: 1,
    waterDDay: 3,
    fertilizerDDay: 13,
    healthy: 2,
  },
];

interface MyPlantProps {
  register: boolean;
}

const MyPlant: React.FC<MyPlantProps> = ({ register }) => {
  return (
    <div className={`bg-[#F2F1E5] ${register ? 'h-[410px]' : 'h-[169.81px]'} `}>
      <div className="px-[22px]">
        <div className="pt-[21.3px] flex justify-between">
          <div className="font-bold">Blooming</div>
          <div>
            <img src={nonUser} alt="프로필이 없는 유저" />
          </div>
        </div>

        {register ? (
          <RegisterMyPlant />
        ) : (
          <div className="text-small-title text-Gray900 pt-[36.1px] pb-[30.3px]">
            <p>김루밍님</p>
            <p>블루밍에 오신걸 환영해요</p>
          </div>
        )}
      </div>
      {register ? <MyPlantAlimCheck plants={myPlants} /> : <MyPlantRegistration />}
    </div>
  );
};

export default MyPlant;
