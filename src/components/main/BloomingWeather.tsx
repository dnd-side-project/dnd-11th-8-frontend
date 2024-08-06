import Weather from './Weather';
import humidWeather from '@/assets/icon/humidWeather.svg';
import pestWeather from '@/assets/icon/pest.svg';

const weathers = [
  {
    id: 1,
    title: '과습 주의보',
    description: '3일 이상 비가 오는 날씨에는 과습 위험이 있습니다.',
    description2: '물 주기 전 흙의 상태를 확인하고 과습을 피하세요.',
    icon: humidWeather,
  },
  {
    id: 2,
    title: '병충해 주의보',
    description: '습도가 높은 날씨에는 병충해 발생 위험이 높아집니다.',
    description2: '식물 주변의 공기 순환을 위해 선풍기를 사용하세요.',
    icon: pestWeather,
  },
  {
    id: 3,
    title: '여름(입하 ~ 대서)',
    description:
      '여름은 식물이 빠르게 성장하는 계절입니다. 평소보다 자주 물을 주고, 흙과 잎 상태를 자주 체크하여 관리하세요.',
    icon: humidWeather,
  },
];

const BloomingWeather = () => {
  return (
    <div className="flex flex-col gap-[20px] mx-[22px]">
      <p className="font-semibold text-regular-body">오늘의 블상청</p>
      <div className="overflow-x-auto whitespace-nowrap hide-scrollbar">
        <div className="flex gap-[10px]">
          {weathers.map((weather) => (
            <Weather
              key={weather.id}
              title={weather.title}
              description={weather.description}
              description2={weather.description2}
              icon={weather.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloomingWeather;
