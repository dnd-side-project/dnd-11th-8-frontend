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
  images: [
    {
      imageId: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=3473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      favorite: true,
      createdDate: '2024-05-20',
    },
    {
      imageId: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=3473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      favorite: false,
      createdDate: '2024-05-22',
    },
    {
      imageId: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=3473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      favorite: false,
      createdDate: '2024-05-23',
    },
    {
      imageId: 4,
      imageUrl:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=3473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      favorite: false,
      createdDate: '2024-05-24',
    },
    {
      imageId: 5,
      imageUrl:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=3473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      favorite: false,
      createdDate: '2024-05-25',
    },
  ],
};
export type MyPlantDetailType = typeof myPlantDetail;
