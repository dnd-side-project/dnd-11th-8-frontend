import Badge from '@/components/common/Badge';
import WaterIcon from '@/assets/icon/watering-pot-gray.svg?react';
import FertilizerIcon from '@/assets/icon/sprout-2-gray.svg?react';
import NoLocation from '@/assets/icon/location-red.svg?react';
import Plant from '@/types/MyPlant.ts';
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';
import { cn } from '@/utils.ts';

interface MyPlantListProps {
  plants: Plant[];
}

const MyPlantList: React.FC<MyPlantListProps> = ({ plants }) => {
  const isPresent = useIsPresent();
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: 'spring', stiffness: 500, damping: 40 },
  };

  return (
    <div>
      <AnimatePresence>
        {plants.map((plant) => (
          <motion.a
            href={`/my-plant/${plant.myPlantId}`}
            key={plant.myPlantId}
            className={cn('flex gap-[16px] px-[20px] py-[16px]', isPresent ? 'static' : 'absolute')}
            {...animations}
            layout
          >
            <img
              src={plant.imageUrl}
              alt="내 식물 사진"
              className="w-[80px] h-[80px] rounded-[10px]"
            />
            <div className="flex flex-col gap-[8px]">
              <div>
                <h3 className="text-[17px] font-medium text-Gray900">{plant.nickname}</h3>
                <p className="text-Gray600 text-[13px] font-normal">{plant.scientificName}</p>
              </div>
              <div className="flex flex-wrap gap-[4px]">
                <Badge
                  className="flex-grow-0 flex-shrink-1 flex items-center gap-[5px] px-[8px] py-[4px] bg-Gray50 text-[13px] text-Gray500 font-medium border border-GrayOpacity100"
                  size={'small'}
                  text={
                    plant.dateSinceLastWater === null
                      ? '기록 없음'
                      : `${plant.dateSinceLastWater}일전`
                  }
                  icon={<WaterIcon />}
                />
                <Badge
                  className="flex-grow-0 flex-shrink-1 flex items-center gap-[5px] px-[8px] py-[4px] bg-Gray50 text-[13px] text-Gray500 font-medium border border-GrayOpacity100"
                  size={'small'}
                  text={
                    plant.dateSinceLastFertilizer === null
                      ? '기록 없음'
                      : `${plant.dateSinceLastFertilizer}일전`
                  }
                  icon={<FertilizerIcon />}
                />
                {!plant.haveLocation && (
                  <Badge
                    size={'small'}
                    className="flex-grow-0 flex-shrink-1 flex items-center gap-[5px] px-[8px] py-[4px] bg-Red50 text-[13px] text-Red500 font-medium border border-RedOpacity100"
                    text="위치없음"
                    icon={<NoLocation />}
                  />
                )}
              </div>
            </div>
          </motion.a>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default MyPlantList;
