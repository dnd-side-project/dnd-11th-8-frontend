/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import { Carousel, CarouselApi, CarouselContent } from '@/components/ui/carousel.tsx';
import { GetHomeScreenDataResponse } from '@/apis/home/getHomeScreenData.ts';
import 창틀 from '@/assets/icon/plants/창틀.svg?react';
import MyPlantCarouselItem from '@/components/main/MyPlantCarouselItem.tsx';
import CarouselCurrentSlide from '@/components/main/CarouselCurrentSlide.tsx';

interface MyPlantAlimCheckProps {
  plants: GetHomeScreenDataResponse['myPlantInfo'];
}

const MyPlantAlimCheck: React.FC<MyPlantAlimCheckProps> = ({ plants }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi}>
      <div className={'absolute h-[230px] -left-6 w-screen bg-[#F2F1E5] max-w-md'} />
      <div className={'absolute flex flex-col gap-3.5 top-5 left-1/2 -translate-x-1/2'}>
        <창틀 />
        <CarouselCurrentSlide currentSlide={current} length={plants.length} />
      </div>
      <CarouselContent>
        {plants.map((plant) => (
          <MyPlantCarouselItem plant={plant} />
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default MyPlantAlimCheck;
