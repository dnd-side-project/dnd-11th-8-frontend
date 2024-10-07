import { useMemo } from 'react';
import { cn } from '@/utils.ts';
import { isFalsy } from '@/utils/validation/isFalsy.ts';
import AlimCheck from '@/components/main/AlimCheck.tsx';
import { CarouselItem } from '@/components/ui/carousel.tsx';
import { getRandomIllustrator } from '@/utils/home/getRandomIllustrator.ts';
import { GetHomeScreenDataResponse } from '@/apis/home/getHomeScreenData.ts';
import useInternalRouter from '@/hooks/useInternalRouter.ts';
import RightArrow from '@/assets/icon/right-arrow.svg?react';

interface MyPlantCarouselItemProps {
  plant: GetHomeScreenDataResponse['myPlantInfo'][number];
}

const MyPlantCarouselItem = ({ plant }: MyPlantCarouselItemProps) => {
  const { push } = useInternalRouter();

  const { Icon, left, right } = useMemo(() => getRandomIllustrator(), []);
  return (
    <CarouselItem>
      <div className="flex flex-col items-center justify-center">
        <Icon
          style={{
            transform: `translateY(-20px) translateX(${(-1 * (left - right)) / 2 - 3}px)`,
          }}
          className={cn('mt-[10px] mb-[30px]')}
        />
        <div className="flex flex-col items-center justify-center">
          <p className="pt-[15px] text-Gray900 font-semibold text-[22px]">
            {isFalsy(plant.nickname) ? plant.scientificName : plant.nickname}
          </p>
          <p className="text-Gray600 font-medium text-[13px]">{plant.scientificName}</p>
          <button
            onClick={() => push('/my-plant')}
            className="flex mt-[10px] gap-[5px] px-[8px] py-[4px] border border-Gray300 rounded-full bg-Gray50 justify-center items-center"
          >
            <p className="text-small-writing text-Gray800">내 식물 전체 보기</p>
            <RightArrow />
          </button>
        </div>

        <div className="mt-[15px] mb-[27px] w-full">
          <AlimCheck plant={plant} />
        </div>
      </div>
    </CarouselItem>
  );
};

export default MyPlantCarouselItem;
