import { privateAxios } from '@/libs/baseAxios.ts';

export interface RecommendedPeriodResponse {
  recommendedWaterDay: number;
  recommendedFertilizerWeek: number;
}

export const getRecommendedPeriod = async (plantId: number | null) => {
  if (plantId === null) return null;

  const response = await privateAxios.get<RecommendedPeriodResponse>(`/plants/${plantId}/period`);
  return response.data;
};
