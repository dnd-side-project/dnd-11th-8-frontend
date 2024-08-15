import SegmentControl from '@/components/common/SegmentControl';
import TabBar from '@/components/main/TabBar';
import MyPlantList from '@/components/myPlant/MyPlantList';
import MyPlantSupplement from '@/components/myPlant/MyPlantSupplement';
import NoMyPlant from '@/components/myPlant/NoMyPlant';
import PlusButton from '@/components/myPlant/PlusButton';
import { useState } from 'react';
import Plant from '@/types/myPlant';
// import { useAllMyPlant } from '@/queries/useAllMyPlant';
// import { LocationQueryParams } from '@/apis/myPlant/getMyAllPlant';

const segments = [
  { id: 1, name: '전체' },
  { id: 2, name: '거실' },
  { id: 3, name: '침실' },
  { id: 4, name: '테라스' },
];

const myPlant: string | Plant[] = [
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
  {
    myPlantId: 3,
    nickname: '루밍이',
    scientificName: '몬스테라 델리오사',
    image:
      'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/5AU5/image/7oHw3DMrgO9_66LHCI3MkoKjY3M.JPG',
    waterRemainDay: 1,
    fertilizerRemainDay: 15,
  },
  {
    myPlantId: 4,
    nickname: '블루밍스밍스스',
    scientificName: '몬스테라 델리오사',
    image:
      'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/5AU5/image/7oHw3DMrgO9_66LHCI3MkoKjY3M.JPG',
    waterRemainDay: 1,
    fertilizerRemainDay: 15,
  },
];

const MyPlant = () => {
  const [bgColor, setBgColor] = useState('');
  const [locationName, setLocationName] = useState('전체');
  // const [locationId, setLocationId] = useState(1);
  // const query: LocationQueryParams = {
  //   sort: 'CREATED', // 'CREATED' 또는 'WATERED' 중 하나 선택
  //   direction: 'ASC', // 'ASC' 또는 'DESC' 중 하나 선택
  //   location: locationId,
  // };

  // const { data: myPlant, error, isLoading } = useAllMyPlant(query);

  const handleOptionClick = () => {
    setBgColor('bg-SementicDimBackground');
  };

  const handleCloseOverlay = () => {
    setBgColor('');
  };

  const handleSegmentChange = (selectedSegment: { id: number; name: string }) => {
    // setLocationId(selectedSegment.id);
    setLocationName(selectedSegment.name);
  };

  // if (isLoading) return <p>로딩 중...</p>;
  // if (error) return <p>오류가 발생했습니다: {error.message}</p>;

  return (
    <div className="relative min-h-screen">
      {/* 배경색 오버레이 */}
      {bgColor && <div className={`fixed inset-0 z-30 ${bgColor}`} onClick={handleCloseOverlay} />}

      <div className="relative">
        <div className="pt-[30px]">
          <SegmentControl segments={segments} onSegmentChange={handleSegmentChange} />
        </div>
        <MyPlantSupplement plants={myPlant} />
        {myPlant.length === 0 ? <NoMyPlant /> : <MyPlantList plants={myPlant} />}
        <PlusButton
          onOptionClick={handleOptionClick}
          onCloseOverlay={handleCloseOverlay}
          locationName={locationName}
        />
        <TabBar />
      </div>
    </div>
  );
};

export default MyPlant;
