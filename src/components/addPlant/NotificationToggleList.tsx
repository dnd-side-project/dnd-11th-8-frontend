import Label from '@/components/common/Label';
import Toggle from '@/components/common/Toggle';
import NotificationToggle from '@/components/addPlant/NotificationToggle.tsx';
import { useState } from 'react';
import { ToggleFormState } from '@/pages/AddPlantPage.tsx';

import FertilizerGreenIcon from '@/assets/icon/FertilizerGreenIcon.svg';
import HeartGreenIcon from '@/assets/icon/HeartGreenIcon.svg';
import WaterGreenIcon from '@/assets/icon/WaterGreenIcon.svg';

interface NotificationToggleListProps {
  water: ToggleFormState;
  setWaterAlarm: (value: boolean) => void;
  setWaterPeriod: (value: number) => void;
  fertilizer: ToggleFormState;
  setFertilizerAlarm: (value: boolean) => void;
  setFertilizerPeriod: (value: number) => void;
  healthCheck: ToggleFormState;
  setHealthCheckAlarm: (value: boolean) => void;
  labelAsTitle?: boolean;
  recommendedWaterPeriod?: number;
  recommendedFertilizerPeriod?: number;
}

const NotificationToggleList = ({
  water,
  setWaterAlarm,
  setFertilizerAlarm,
  setFertilizerPeriod,
  setWaterPeriod,
  fertilizer,
  setHealthCheckAlarm,
  healthCheck,
  labelAsTitle = false,
  recommendedWaterPeriod,
  recommendedFertilizerPeriod,
}: NotificationToggleListProps) => {
  const [notificationEnabled, setNotificationEnabled] = useState<boolean>(
    water.checked || fertilizer.checked || healthCheck.checked,
  );

  return (
    <div className={'flex flex-col gap-[10px]'}>
      <div className={'flex flex-row items-center justify-between'}>
        {labelAsTitle ? (
          <p className={'text-[18px] leading-[26px] font-bold'}>알림</p>
        ) : (
          <Label htmlFor={'알림 받기'} title={'알림 받기'} essential={false} />
        )}
        <Toggle
          checked={notificationEnabled}
          onCheckedChange={(checked) => setNotificationEnabled(checked)}
        />
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
            onSelect={(value) => setWaterPeriod(value)}
            onCheckedChange={(checked) => setWaterAlarm(checked)}
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
            onSelect={(value) => setFertilizerPeriod(value)}
            onCheckedChange={(checked) => setFertilizerAlarm(checked)}
            icon={FertilizerGreenIcon}
            badgeIndex={recommendedFertilizerPeriod}
          />
          <NotificationToggle
            name={healthCheck.title}
            hasPeriod={false}
            period={healthCheck.period}
            checked={healthCheck.checked}
            onCheckedChange={(checked) => setHealthCheckAlarm(checked)}
            icon={HeartGreenIcon}
          />
        </div>
      )}
    </div>
  );
};

export default NotificationToggleList;
