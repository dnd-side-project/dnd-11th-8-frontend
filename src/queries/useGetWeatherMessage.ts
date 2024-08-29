import { useSuspenseQuery } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';
import { getWeatherMessage } from '@/apis/weathers/getWeatherMessage.ts';

export const useGetWeatherMessage = () =>
  useSuspenseQuery({
    queryKey: keyStore.weather.getWeather.queryKey,
    queryFn: getWeatherMessage,
  });
