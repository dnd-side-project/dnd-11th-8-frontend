import { WeatherMessage } from '@/types/weathers.ts';

export const weathers: WeatherMessage[] = [
  {
    status: 'HUMIDITY',
    title: '과습 주의보',
    message: [
      '3일 이상 비가 오는 날씨에는 과습 위험이 있습니다.',
      '물 주기 전 흙의 상태를 확인하고 과습을 피하세요.',
    ],
  },
  {
    status: 'BUG',
    title: '병충해 주의보',
    message: [
      '습도가 높은 날씨에는 병충해 발생 위험이 높아집니다.',
      '식물 주변의 공기 순환을 위해 선풍기를 사용하세요.',
    ],
  },
];
