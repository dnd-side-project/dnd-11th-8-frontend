interface Plant {
  myPlantId: number;
  nickname: string;
  scientificName: string;
  haveLocation: boolean; //false 이면 분류없음
  imageUrl: string;
  dateSinceLastWater: number | null; //null 이면 기록없음
  dateSinceLastFertilizer: number | null; //null 이면 기록없음
  dateSinceLasthealthCheck: number | null;
}
export default Plant;
