import React, { useState } from 'react';
import AlimCheck from './AlimCheck';
import myPlantsAll from '@/assets/icon/MyPlantsAll.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useInternalRouter from '@/hooks/useInternalRouter';

interface Plant {
  myPlantId: number;
  name: string;
  scientificName: string;
  illustUrl: string;
  dateSinceLastWater: number | null;
  dateSinceLastFertilizer: number | null;
  dateSinceLastHealthCheck: number | null;
}

interface MyPlantAlimCheckProps {
  plants: Plant[];
}

const MyPlantAlimCheck: React.FC<MyPlantAlimCheckProps> = ({ plants }) => {
  const { push } = useInternalRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
    <div className="overflow-hidden ">
      <Slider {...settings}>
        {plants.map((plant) => (
          <div key={plant.myPlantId} className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center mt-[20px]">
              <img
                src={plant.illustUrl}
                alt="나의 식물 일러스트"
                className="w-[228.76px] h-[239.31px]"
              />

              <div className="relative flex flex-col items-center justify-center">
                <CurrentSlide currentSlide={currentSlide} plants={plants} />
                <p className="pt-[15px] text-Gray900 font-semibold text-[22px]">{plant.name}</p>
                <p className="text-Gray600 font-medium text-[13px]">{plant.scientificName}</p>
                <button
                  onClick={() => push('/my-plant')}
                  className="flex mt-[10px] gap-[5px] px-[8px] py-[4px] border border-Gray300 rounded-full bg-Gray50 justify-center items-center"
                >
                  <p className="text-small-writing text-Gray800">내 식물 전체 보기</p>
                  <img src={myPlantsAll} alt="내 식물 보러가기 아이콘" />
                </button>
              </div>

              <div className="mt-[15px] mb-[27px] w-[331px]">
                <AlimCheck
                  water={plant.dateSinceLastWater}
                  fertilizer={plant.dateSinceLastFertilizer}
                  sunlight={plant.dateSinceLastHealthCheck}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
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
                currentSlide === index ? 'bg-[#34C184] w-[9.28px] h-[9.28px]' : 'bg-Gray300'
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MyPlantAlimCheck;
