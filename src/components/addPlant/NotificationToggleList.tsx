import { useState } from 'react';
import Label from '@/components/common/Label';
import Toggle from '@/components/common/Toggle';
import NotificationToggle from '@/components/addPlant/NotificationToggle.tsx';
import { ToggleFormState } from '@/pages/AddPlantPage.tsx';

import FertilizerGreenIcon from '@/assets/icon/sprout-2-green-large.svg?react';
import HeartGreenIcon from '@/assets/icon/heart-green.svg?react';
import WaterGreenIcon from '@/assets/icon/watering-pot-green.svg?react';
import CenterBottomSheet from '@/components/common/CenterBottomSheet';
import CTAButton from '@/components/common/CTAButton';

interface NotificationToggleListProps {
  plantId?: number;
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
  onNotificationEnabledChange?: (enabled: boolean) => void;
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
  onNotificationEnabledChange,
}: NotificationToggleListProps) => {
  const [notificationEnabled, setNotificationEnabled] = useState<boolean>(
    water.checked || fertilizer.checked || healthCheck.checked,
  );
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const handleNotificationEnabledChange = (enabled: boolean) => {
    setNotificationEnabled(enabled);
    if (onNotificationEnabledChange) {
      onNotificationEnabledChange(enabled);
    }
  };

  const handleBottomSheetClose = (type: 'water' | 'fertilizer') => {
    switch (type) {
      case 'water':
        if (!water.period) {
          setBottomSheetOpen(true);
        }
        break;
      case 'fertilizer':
        if (!fertilizer.period) {
          setBottomSheetOpen(true);
        }
    }
  };

  return (
    <div className={'flex flex-col gap-[10px] mt-[20px]'}>
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
            onSelect={(value) => setWaterPeriod(value)}
            onCheckedChange={(checked) => setWaterAlarm(checked)}
            Icon={<WaterGreenIcon />}
            badgeIndex={recommendedWaterPeriod}
            onBottomSheetClose={() => handleBottomSheetClose('water')}
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
            Icon={<FertilizerGreenIcon className={'-mx-[4px] mr-0.5'} />}
            onBottomSheetClose={() => handleBottomSheetClose('fertilizer')}
            badgeIndex={recommendedFertilizerPeriod}
          />
          <NotificationToggle
            name={healthCheck.title}
            hasPeriod={false}
            period={healthCheck.period}
            checked={healthCheck.checked}
            onCheckedChange={(checked) => setHealthCheckAlarm(checked)}
            Icon={<HeartGreenIcon className={'mr-1.5'} />}
          />
        </div>
      )}
      <CenterBottomSheet
        title={'주기를 입력하지 않으면 추천값이 사용되어요.'}
        content={<></>}
        actions={[
          <CTAButton
            className={'bg-BloomingGreen500'}
            text={'확인'}
            onClick={() => setBottomSheetOpen(false)}
          />,
        ]}
        isOpen={bottomSheetOpen}
        onOpenChange={setBottomSheetOpen}
      />
    </div>
  );
};

export default NotificationToggleList;
