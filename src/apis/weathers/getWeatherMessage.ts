import { privateAxios } from '@/libs/baseAxios.ts';
import { WeatherMessage } from '@/types/weathers.ts';

export const getWeatherMessage = async () => {
  const response = await privateAxios.get<WeatherMessage[]>('/weather-message');

  return response.data;
};
