import Weather from './Weather';
import humidWeather from '@/assets/icon/humidWeather.svg';
import pestWeather from '@/assets/icon/pest.svg';

const weathers = [
  {
    status: 'RAINY',
    image: humidWeather,
    title: '과습 주의보',
    message: [
      '3일 이상 비가 오는 날씨에는 과습 위험이 있습니다.',
      '물 주기 전 흙의 상태를 확인하고 과습을 피하세요.',
    ],
  },
  {
    status: 'BUG',
    image: pestWeather,
    title: '병충해 주의보',
    message: [
      '습도가 높은 날씨에는 병충해 발생 위험이 높아집니다.',
      '식물 주변의 공기 순환을 위해 선풍기를 사용하세요.',
    ],
  },
];

interface BloomingWeatherProps {
  register: boolean;
}

const BloomingWeather: React.FC<BloomingWeatherProps> = () => {
  return (
    <div className={`flex flex-col gap-[20px]`}>
      <p className="font-semibold text-regular-body">데일리 블루밍</p>
      <div className="z-20 overflow-x-auto whitespace-nowrap hide-scrollbar">
        <div className="flex gap-[10px]">
          {weathers.map((weather) => (
            <Weather
              key={weather.status}
              title={weather.title}
              description={weather.message}
              icon={weather.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloomingWeather;
