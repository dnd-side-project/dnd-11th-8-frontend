import Weather from './Weather';
import { weatherMessageIcon } from '@/constants/weatherMessageIcon.ts';
import { useGetWeatherMessage } from '@/queries/useGetWeatherMessage.ts';

interface BloomingWeatherProps {
  register: boolean;
}

const BloomingWeather: React.FC<BloomingWeatherProps> = () => {
  const { data: weathers } = useGetWeatherMessage();

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
              icon={weatherMessageIcon[weather.status]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloomingWeather;
