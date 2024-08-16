export const myPlantDetail = {
  nickname: '쫑쫑이',
  scientificName: '몬스테라 델리오사',
  plantId: 1,
  location: '거실',
  startDate: '2024-04-17',
  lastWateredTitle: '마지막으로 물 준 날',
  lastWateredInfo: '2024-05-20\n14일전',
  lastFertilizerTitle: '비료주기',
  lastFertilizerInfo: '1개월 이내',
  waterAlarm: true,
  waterPeriod: 3,
  fertilizerAlarm: false,
  fertilizerPeriod: 30,
  healthCheckAlarm: false,
  images: [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      favorite: true,
      createdDate: '2024-05-20',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      favorite: false,
      createdDate: '2024-05-22',
    },
  ],
};

export type MyPlantDetailType = typeof myPlantDetail;
