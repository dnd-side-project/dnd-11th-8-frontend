import { LocationQueryParams } from '@/apis/myPlant/getMyAllPlant';
import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const keyStore = createQueryKeyStore({
  plantGuide: {
    searchPlant: (query: string) => [query],
    detail: (id: number) => [id],
  },
  location: {
    addNewLocation: null,
    getAllLocation: null,
    updateLocation: null,
    deleteLocation: null,
  },
  myPlant: {
    getMyAllPlant: (query?: LocationQueryParams) => ['getMyAllPlant', query],
    createMyPlant: null,
    getDetail: (id: number) => [id],
    getRecommendedPeriod: (plantId: number | null) => [`${plantId}`],
    updateMyPlant: null,
  },
  auth: {
    signIn: null,
    refreshAccessToken: null,
  },
  user: {
    register: null,
    regions: (query: string) => [query],
  },
  home: {
    getHomeData: null,
  },
  weather: {
    getWeather: null,
  },
});
