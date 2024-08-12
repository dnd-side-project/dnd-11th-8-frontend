import SegmentControl from '@/components/common/SegmentControl';
import TabBar from '@/components/main/TabBar';
import MyPlantLayout from '@/components/myPlant/MyPlantLayout';
import MyPlantList from '@/components/myPlant/MyPlantList';
import MyPlantSupplement from '@/components/myPlant/MyPlantSupplement';

const segments = [
  {
    id: 1,
    name: '전체',
  },
  {
    id: 2,
    name: '거실',
  },
  {
    id: 3,
    name: '침실',
  },
  {
    id: 4,
    name: '테라스',
  },
];

const myPlant = [
  {
    myPlantId: 1,
    nickname: '쫑쫑이',
    scientificName: '몬스테라 델리오사',
    image:
      'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/5AU5/image/7oHw3DMrgO9_66LHCI3MkoKjY3M.JPG',
    waterRemainDay: 1,
    fertilizerRemainDay: 15,
  },
  {
    myPlantId: 2,
    nickname: '뿡뿡이',
    scientificName: '병아리눈물',
    image:
      'https://thumbnail.10x10.co.kr/webimage/image/basic600/456/B004562843.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false',
    waterRemainDay: 3,
    fertilizerRemainDay: 23,
  },
];

const MyPlant = () => {
  return (
    <>
      <MyPlantLayout>
        <SegmentControl segments={segments} />
        <MyPlantSupplement plants={myPlant} />
        <MyPlantList plants={myPlant} />
        <TabBar />
      </MyPlantLayout>
    </>
  );
};

export default MyPlant;
