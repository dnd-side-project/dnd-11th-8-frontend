import Weather from './Weather';

const BloomingWeather = () => {
  return (
    <div className="flex flex-col gap-[20px] mx-[22px]">
      <p className="font-semibold text-regular-body">오늘의 블상청</p>
      <div>
        <Weather />
      </div>
    </div>
  );
};

export default BloomingWeather;
