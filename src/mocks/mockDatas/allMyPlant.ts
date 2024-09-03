import Plant from '@/types/MyPlant.ts';

export const allMyPlant: string | Plant[] = [
  {
    myPlantId: 1,
    nickname: '쫑쫑이',
    scientificName: '몬스테라 델리오사',
    haveLocation: false, //false 이면 분류없음
    imageUrl:
      'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/5AU5/image/7oHw3DMrgO9_66LHCI3MkoKjY3M.JPG',
    dateSinceLastWater: 3, //null 이면 기록없음
    dateSinceLastFertilizer: 23, //null 이면 기록없음
    dateSinceLastHealthCheck: 3,
    registerDate: new Date('2024-08-29').toString(),
    locationId: 1,
  },
  {
    myPlantId: 2,
    nickname: '뿡뿡이',
    scientificName: '병아리눈물',
    haveLocation: true, //false 이면 분류없음
    imageUrl:
      'https://thumbnail.10x10.co.kr/webimage/image/basic600/456/B004562843.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false',
    dateSinceLastWater: 3, //null 이면 기록없음
    dateSinceLastFertilizer: 23, //null 이면 기록없음
    dateSinceLastHealthCheck: 3,
    registerDate: new Date('2024-08-28').toString(),
    locationId: 2,
  },
  {
    myPlantId: 3,
    nickname: '방방이',
    scientificName: '진달래',
    haveLocation: false, //false 이면 분류없음
    imageUrl:
      'https://thumbnail.10x10.co.kr/webimage/image/basic600/456/B004562843.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false',
    dateSinceLastWater: null, //null 이면 기록없음
    dateSinceLastFertilizer: null, //null 이면 기록없음
    dateSinceLastHealthCheck: 3,
    registerDate: new Date('2024-08-28').toString(),
    locationId: null,
  },
];
