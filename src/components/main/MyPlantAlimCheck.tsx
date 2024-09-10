import React, { useMemo } from 'react';
import AlimCheck from './AlimCheck';
import myPlantsAll from '@/assets/icon/MyPlantsAll.svg';
import useInternalRouter from '@/hooks/useInternalRouter';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel.tsx';
import { GetHomeScreenDataResponse } from '@/apis/home/getHomeScreenData.ts';
import { getRandomIllustrator } from '@/utils/home/getRandomIllustrator.ts';
import 창틀 from '@/assets/icon/plants/창틀.svg';
import { cn } from '@/utils.ts';
import { isFalsy } from '@/utils/validation/isFalsy.ts';

interface MyPlantAlimCheckProps {
  plants: GetHomeScreenDataResponse['myPlantInfo'];
}

const MyPlantAlimCheck: React.FC<MyPlantAlimCheckProps> = ({ plants }) => {
  const { push } = useInternalRouter();
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

  const imageUrl = useMemo(() => getRandomIllustrator(), []);

  return (
    <Carousel setApi={setApi}>
      <div className={'absolute h-[230px] -left-6 w-screen bg-[#F2F1E5] max-w-md'} />
      <img className={'absolute top-5 left-1/2 -translate-x-1/2'} src={창틀} />
      <CarouselContent>
        {plants.map((plant) => (
          <CarouselItem key={plant.myPlantId}>
            <div className="flex flex-col items-center justify-center">
              <img
                src={imageUrl.src}
                alt="나의 식물 일러스트"
                style={{
                  transform: `translateY(-20px) translateX(${(-1 * (imageUrl.left - imageUrl.right)) / 2 - 3}px)`,
                }}
                className={cn('mt-[10px] mb-[30px]')}
              />
              <div className="flex flex-col items-center justify-center">
                <CurrentSlide currentSlide={current} plants={plants} />
                <p className="pt-[15px] text-Gray900 font-semibold text-[22px]">
                  {isFalsy(plant.nickname) ? plant.scientificName : plant.nickname}
                </p>
                <p className="text-Gray600 font-medium text-[13px]">{plant.scientificName}</p>
                <button
                  onClick={() => push('/my-plant')}
                  className="flex mt-[10px] gap-[5px] px-[8px] py-[4px] border border-Gray300 rounded-full bg-Gray50 justify-center items-center"
                >
                  <p className="text-small-writing text-Gray800">내 식물 전체 보기</p>
                  <img src={myPlantsAll} alt="내 식물 보러가기 아이콘" />
                </button>
              </div>

              <div className="mt-[15px] mb-[27px] w-full">
                <AlimCheck
                  water={plant.dateSinceLastWater}
                  fertilizer={plant.dateSinceLastFertilizer}
                  sunlight={plant.dateSinceLasthealthCheck}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

interface CurrentSlideProps {
  currentSlide: number;
  plants: GetHomeScreenDataResponse['myPlantInfo'];
}

const CurrentSlide: React.FC<CurrentSlideProps> = ({ currentSlide, plants }) => {
  return (
    <>
      {plants.length > 1 && (
        <div className="flex justify-center items-center gap-[5px]">
          {plants.map((_, index) => (
            <div
              key={index}
              className={`w-[7px] h-[7px] rounded-full ${
                currentSlide - 1 === index ? 'bg-[#34C184] w-[9.28px] h-[9.28px]' : 'bg-Gray300'
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MyPlantAlimCheck;
