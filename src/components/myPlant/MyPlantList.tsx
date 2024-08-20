import Badge from '@/components/common/Badge';
import waterIcon from '@/assets/icon/myPlantWater.svg';
import fertilizerIcon from '@/assets/icon/myPlantFertilizer.svg';
import noLocation from '@/assets/icon/noLocation.svg';
import { Link } from 'react-router-dom';

interface MyPlantListProps {
  plants: Array<{
    myPlantId: number;
    nickname: string;
    scientificName: string;
    haveLocation: boolean; // false 이면 분류없음
    imageUrl: string;
    dateSinceLastWater: number | null; // null 이면 기록없음
    dateSinceLastFertilizer: number | null; // null 이면 기록없음
    dateSinceLasthealthCheck: number | null;
  }>;
}

const MyPlantList: React.FC<MyPlantListProps> = ({ plants }) => {
  return (
    <div>
      {plants.map((plant) => (
        <Link
          to={`/my-Plant/${plant.myPlantId}`}
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
                text={`${plant.dateSinceLastWater}일전`}
                icon={waterIcon}
              />
              <Badge
                className="flex-grow-0 flex-shrink-1 flex items-center gap-[5px] px-[8px] py-[4px] bg-Gray50 text-[13px] text-Gray500 font-medium border border-GrayOpacity100"
                text={`${plant.dateSinceLastFertilizer}일전`}
                icon={fertilizerIcon}
              />
              {!plant.haveLocation && (
                <Badge
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
