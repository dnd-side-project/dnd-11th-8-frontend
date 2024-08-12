import Badge from '@/components/common/Badge';
import waterIcon from '@/assets/icon/myPlantWater.svg';

interface MyPlantListProps {
  plants: Array<{
    myPlantId: number;
    nickname: string;
    scientificName: string;
    image: string;
    waterRemainDay: number;
    fertilizerRemainDay: number;
  }>;
}

const MyPlantList: React.FC<MyPlantListProps> = ({ plants }) => {
  return (
    <div>
      {plants.map((plant) => (
        <div key={plant.myPlantId} className="flex gap-[16px] px-[20px] py-[16px]">
          <img src={plant.image} alt="내 식물 사진" className="w-[80px] h-[80px] rounded-[10px]" />
          <div className="flex flex-col gap-[8px]">
            <div>
              <h3 className="text-[17px] font-medium text-Gray900">{plant.nickname}</h3>
              <p className="text-Gray600 text-[13px] font-normal">{plant.scientificName}</p>
            </div>
            <div className="flex gap-[5px]">
              <Badge
                className="flex items-center gap-[5px] px-[8px] py-[4px] bg-Gray50 text-[11px] text-Gray500 font-medium	border border-GrayOpacity100"
                text={`${plant.waterRemainDay}일 이내`}
                icon={waterIcon}
              />
              <Badge
                className="flex items-center gap-[5px] px-[8px] py-[4px] bg-Gray50 text-[11px] text-Gray500 font-medium	border border-GrayOpacity100"
                text={`${plant.fertilizerRemainDay}일 이내`}
                icon={waterIcon}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPlantList;
