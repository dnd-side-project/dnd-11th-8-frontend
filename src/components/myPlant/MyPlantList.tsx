import Badge from '@/components/common/Badge';
import waterIcon from '@/assets/icon/myPlantWater.svg';
import fertilizerIcon from '@/assets/icon/myPlantFertilizer.svg';
import noLocation from '@/assets/icon/noLocation.svg';
import { Link } from 'react-router-dom';
import Plant from '@/types/MyPlant.ts';

interface MyPlantListProps {
  plants: Plant[];
}

const MyPlantList: React.FC<MyPlantListProps> = ({ plants }) => {
  return (
    <div>
      {plants.map((plant) => (
        <Link
          to={`/my-plant/${plant.myPlantId}`}
          key={plant.myPlantId}
          className="flex gap-[16px] px-[20px] py-[16px]"
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
                icon={waterIcon}
              />
              <Badge
                className="flex-grow-0 flex-shrink-1 flex items-center gap-[5px] px-[8px] py-[4px] bg-Gray50 text-[13px] text-Gray500 font-medium border border-GrayOpacity100"
                size={'small'}
                text={
                  plant.dateSinceLastFertilizer === null
                    ? '기록 없음'
                    : `${plant.dateSinceLastFertilizer}일전`
                }
                icon={fertilizerIcon}
              />
              {!plant.haveLocation && (
                <Badge
                  size={'small'}
                  className="flex-grow-0 flex-shrink-1 flex items-center gap-[5px] px-[8px] py-[4px] bg-Red50 text-[13px] text-Red500 font-medium border border-RedOpacity100"
                  text="위치없음"
                  icon={noLocation}
                />
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MyPlantList;
