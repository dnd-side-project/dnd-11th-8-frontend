import React, { ReactNode } from 'react';
import WaterIcon from '@/assets/icon/watering-pot-green.svg?react';
import FertilizerIcon from '@/assets/icon/sprout-2-green.svg?react';
import HeartIcon from '@/assets/icon/heart-green.svg?react';
import BeforeWaterIcon from '@/assets/icon/watering-pot-gray.svg?react';
import BeforeFertilizerIcon from '@/assets/icon/sprout-2-gray.svg?react';
import BeforeHeartIcon from '@/assets/icon/heart-dark-gray.svg?react';
import CheckIcon from '@/assets/icon/circular-checkbox-uncheck.svg?react';
import AfterCheckIcon from '@/assets/icon/circular-checkbox-checked.svg?react';
import useToast from '@/hooks/useToast';
import { useUpdateMyPlantStatus } from '@/queries/useUpdateMyPlantStatus.ts';
import { UpdateMyPlantType, UpdateMyPlantTypeKeys } from '@/apis/myPlant/updateMyPlantStatus.ts';
import { GetHomeScreenDataResponse } from '@/apis/home/getHomeScreenData.ts';

interface CheckItemProps {
  icon: ReactNode;
  beforeIcon: ReactNode;
  label: string;
  lastChecked: number | null;
  checked: boolean;
  onCheck: () => void;
}

const CheckItem: React.FC<CheckItemProps> = ({
  icon,
  beforeIcon,
  label,
  lastChecked,
  checked,
  onCheck,
}) => {
  const currentIcon = checked ? icon : beforeIcon;

  return (
    <div className="flex flex-col items-center gap-[4px]">
      <button onClick={onCheck}>{currentIcon}</button>
      <p className="text-small-writing text-Gray400">{label}</p>
      <button
        onClick={onCheck}
        className={`flex gap-[10px] text-sub-typo w-[67px] h-[23px] items-center justify-center rounded-full transition-all ${
          checked
            ? 'bg-green-500 text-white'
            : 'bg-Gray50 text-Gray500 border border-GrayOpacity100'
        }`}
      >
        {checked ? (
          <>
            <AfterCheckIcon />
            완료
          </>
        ) : (
          <>
            <CheckIcon />
            {lastChecked ? `${lastChecked}일 전` : '기록 없음'}
          </>
        )}
      </button>
    </div>
  );
};

interface AlimCheckProps {
  plant: GetHomeScreenDataResponse['myPlantInfo'][number];
}

const AlimCheck: React.FC<AlimCheckProps> = ({ plant }) => {
  const { openToast } = useToast();
  const { mutate: updateMyPlantStatus } = useUpdateMyPlantStatus(plant.myPlantId);

  const messages = [
    '환기는 시켜주셨나요?',
    '식물에 붙은 먼지는 잘 털어 주셨나요?',
    '애정있게 쳐다보셨나요?',
    '잎의 색이 건강해 보이나요?',
    '흙의 상태를 점검하셨나요?',
    '식물이 자라는 방향을 바꿔 주셨나요?',
    '해충이 없는지 확인하셨나요?',
  ];

  const showHealthCheckTooltip = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    openToast({
      message: randomMessage,
      duration: 2000,
      className: 'text-white w-[300px]',
    });
  };

  const handleAlimCheck = (mode: (typeof UpdateMyPlantType)[UpdateMyPlantTypeKeys]) => {
    if (mode === UpdateMyPlantType.HEALTH_CHECK) {
      showHealthCheckTooltip();
    }

    updateMyPlantStatus(mode, {
      onError: () => {
        let message: string;

        switch (mode) {
          case UpdateMyPlantType.WATER:
            message = '물주기';
            break;
          case UpdateMyPlantType.HEALTH_CHECK:
            message = '관심주기';
            break;
          case UpdateMyPlantType.FERTILIZER:
            message = '비료주기';
            break;
          default:
            message = '상태 변경';
            break;
        }
        openToast({
          message: `${message}에 실패했습니다.`,
          duration: 2000,
          className: 'text-white w-[300px]',
        });
      },
    });
  };

  return (
    <div className="p-[20px] bg-white rounded-[10px] shadow-sm">
      <div className="relative flex items-center justify-between">
        <div className="flex-1">
          <CheckItem
            icon={<WaterIcon />}
            beforeIcon={<BeforeWaterIcon />}
            label="물주기"
            lastChecked={plant.dateSinceLastWater}
            checked={plant.dateSinceLastWater === 0}
            onCheck={() => handleAlimCheck(UpdateMyPlantType.WATER)}
          />
        </div>
        <div className="flex-1 relative before:content-[''] before:absolute before:top-1/3 before:left-0 before:w-[1px] before:h-[25px] before:bg-Gray400 after:content-[''] after:absolute after:top-1/3 after:right-0 after:w-[1px] after:h-[25px] after:bg-Gray400">
          <CheckItem
            icon={<HeartIcon width={20} height={20} />}
            beforeIcon={<BeforeHeartIcon width={20} height={20} />}
            label="관심주기"
            lastChecked={plant.dateSinceLasthealthCheck}
            checked={plant.dateSinceLasthealthCheck === 0}
            onCheck={() => handleAlimCheck(UpdateMyPlantType.HEALTH_CHECK)}
          />
        </div>
        <div className="flex-1">
          <CheckItem
            icon={<FertilizerIcon />}
            beforeIcon={<BeforeFertilizerIcon />}
            label="비료"
            lastChecked={plant.dateSinceLastFertilizer}
            checked={plant.dateSinceLastFertilizer === 0}
            onCheck={() => handleAlimCheck(UpdateMyPlantType.FERTILIZER)}
          />
        </div>
      </div>
    </div>
  );
};

export default AlimCheck;
