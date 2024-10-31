export const myPlantDetail = {
  nickname: '쫑쫑이',
  scientificName: '몬스테라 델리오사',
  plantId: 1, //직접 등록한 식물 종류면 null
  location: {
    id: 1,
    name: '거실',
  },
  withDays: 239,
  lastWateredTitle: '마지막으로 물 준 날',
  lastWateredInfo: '2024-05-20\n14일전',
  lastWateredDate: '2024-05-20',
  lastFertilizerTitle: '비료주기',
  lastFertilizerInfo: '기록없음',
  lastFertilizerDate: '2024-05-20',
  waterAlarm: true,
  waterPeriod: 3,
  fertilizerAlarm: false,
  fertilizerPeriod: 30,
  healthCheckAlarm: false,
  images: [],
};
export type MyPlantDetailType = typeof myPlantDetail;
