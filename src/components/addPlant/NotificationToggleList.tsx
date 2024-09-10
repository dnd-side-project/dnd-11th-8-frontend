import Label from '@/components/common/Label';
import Toggle from '@/components/common/Toggle';
import NotificationToggle from '@/components/addPlant/NotificationToggle.tsx';
import { useState } from 'react';
import { ToggleFormState } from '@/pages/AddPlantPage.tsx';

import FertilizerGreenIcon from '@/assets/icon/FertilizerGreenIcon.svg';
import HeartGreenIcon from '@/assets/icon/HeartGreenIcon.svg';
import WaterGreenIcon from '@/assets/icon/WaterGreenIcon.svg';

interface NotificationToggleListProps {
  plantId?: number;
  water: ToggleFormState;
  setWater: (value: Partial<ToggleFormState>) => void;
  fertilizer: ToggleFormState;
  setFertilizer: (value: Partial<ToggleFormState>) => void;
  healthCheck: ToggleFormState;
  setHealthCheck: (value: Partial<ToggleFormState>) => void;
  labelAsTitle?: boolean;
  recommendedWaterPeriod?: number;
  recommendedFertilizerPeriod?: number;
  onNotificationEnabledChange?: (enabled: boolean) => void;
}

const NotificationToggleList = ({
  water,
  setWater,
  setFertilizer,
  fertilizer,
  setHealthCheck,
  healthCheck,
  labelAsTitle = false,
  recommendedWaterPeriod,
  recommendedFertilizerPeriod,
  onNotificationEnabledChange,
}: NotificationToggleListProps) => {
  const [notificationEnabled, setNotificationEnabled] = useState<boolean>(
    water.checked || fertilizer.checked || healthCheck.checked,
  );

  const handleNotificationEnabledChange = (enabled: boolean) => {
    setNotificationEnabled(enabled);
    if (onNotificationEnabledChange) {
      onNotificationEnabledChange(enabled);
    }
  };

  return (
    <div className={'flex flex-col gap-[10px]'}>
      <div className={'flex flex-row items-center justify-between'}>
        {labelAsTitle ? (
          <p className={'text-[18px] leading-[26px] font-bold'}>알림</p>
        ) : (
          <Label htmlFor={'알림 받기'} title={'알림 받기'} essential={false} />
        )}
        <Toggle checked={notificationEnabled} onCheckedChange={handleNotificationEnabledChange} />
      </div>
      {notificationEnabled && (
        <div className={'flex flex-col gap-[10px]'}>
          <NotificationToggle
            name={water.title}
            period={water.period}
            periodUnit={'일'}
            checked={water.checked}
            bottomSheetTitle={'며칠 간격으로 물을 줄까요?\n권장량을 확인하세요'}
            valueStart={1}
            valueEnd={30}
            onSelect={(value) => setWater({ period: value })}
            onCheckedChange={(checked) => setWater({ checked })}
            icon={WaterGreenIcon}
            badgeIndex={recommendedWaterPeriod}
          />
          <NotificationToggle
            name={fertilizer.title}
            period={fertilizer.period}
            periodUnit={'주'}
            checked={fertilizer.checked}
            bottomSheetTitle={'몇 주 간격으로 비료를 줄까요?\n잦은 비료 투여는 과유블급이에요'}
            valueStart={1}
            valueEnd={30}
            onSelect={(value) => setFertilizer({ period: value })}
            onCheckedChange={(checked) => setFertilizer({ checked })}
            icon={FertilizerGreenIcon}
            badgeIndex={recommendedFertilizerPeriod}
          />
          <NotificationToggle
            name={healthCheck.title}
            period={healthCheck.period}
            checked={healthCheck.checked}
            onCheckedChange={(checked) => setHealthCheck({ checked })}
            icon={HeartGreenIcon}
          />
        </div>
      )}
    </div>
  );
};

export default NotificationToggleList;
