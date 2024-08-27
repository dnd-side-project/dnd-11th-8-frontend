import React from 'react';
import AlimCheck from './AlimCheck';
import myPlantsAll from '@/assets/icon/MyPlantsAll.svg';
import useInternalRouter from '@/hooks/useInternalRouter';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel.tsx';

interface Plant {
  myPlantId: number;
  nickname: string;
  scientificName: string;
  haveLocation: boolean;
  imageUrl: string;
  dateSinceLastWater: number | null;
  dateSinceLastFertilizer: number | null;
  dateSinceLasthealthCheck: number | null;
}

interface MyPlantAlimCheckProps {
  plants: Plant[];
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

  return (
    <Carousel setApi={setApi}>
      <div className={'absolute h-[239.31px] -left-6 w-screen bg-[#F2F1E5] max-w-md'} />
      <CarouselContent>
        {plants.map((plant) => (
          <CarouselItem key={plant.myPlantId}>
            <div className="flex flex-col items-center justify-center mt-[20px]">
              <img
                src={plant.imageUrl}
                alt="나의 식물 일러스트"
                className={'mt-[10px] mb-[15px]'}
              />
              <div className="flex flex-col items-center justify-center">
                <CurrentSlide currentSlide={current} plants={plants} />
                <p className="pt-[15px] text-Gray900 font-semibold text-[22px]">{plant.nickname}</p>
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
  plants: Plant[];
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
