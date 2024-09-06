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
    getMyAllPlant: null,
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
    getMyPageData: null,
    updateNickname: null,
    updateAlarmStatus: null,
    updateAlarmTime: null,
  },
  home: {
    getHomeData: null,
  },
  weather: {
    getWeather: null,
  },
});
