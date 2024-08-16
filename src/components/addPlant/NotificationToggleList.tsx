import Label from '@/components/common/Label';
import Toggle from '@/components/common/Toggle';
import NotificationToggle from '@/components/addPlant/NotificationToggle.tsx';
import { useState } from 'react';
import { ToggleFormState } from '@/pages/AddPlantPage.tsx';

interface NotificationToggleListProps {
  water: ToggleFormState;
  setWater: (value: Partial<ToggleFormState>) => void;
  fertilizer: ToggleFormState;
  setFertilizer: (value: Partial<ToggleFormState>) => void;
  healthCheck: ToggleFormState;
  setHealthCheck: (value: Partial<ToggleFormState>) => void;
}

const NotificationToggleList = ({
  water,
  setWater,
  setFertilizer,
  fertilizer,
  setHealthCheck,
  healthCheck,
}: NotificationToggleListProps) => {
  const [notificationEnabled, setNotificationEnabled] = useState<boolean>(false);

  return (
    <div className={'flex flex-col gap-[10px]'}>
      <div className={'flex flex-row items-center justify-between'}>
        <Label htmlFor={'알림 받기'} title={'알림 받기'} essential={false} />
        <Toggle onCheckedChange={(checked) => setNotificationEnabled(checked)} />
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
          />
          <NotificationToggle
            name={healthCheck.title}
            period={healthCheck.period}
            checked={healthCheck.checked}
            onCheckedChange={(checked) => setHealthCheck({ checked })}
          />
        </div>
      )}
    </div>
  );
};

export default NotificationToggleList;
