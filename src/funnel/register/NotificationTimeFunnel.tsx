import Screen from '@/layouts/Screen.tsx';
import Header from '@/components/common/Header';
import 왼쪽꺽쇠 from '@/assets/icon/왼쪽꺽쇠.tsx';
import HeightBox from '@/components/common/HeightBox';
import RegisterFunnelTitle from '@/components/register/RegisterFunnelTitle.tsx';
import CTAButton from '@/components/common/CTAButton';
import { cn } from '@/utils.ts';
import { useState } from 'react';
import { NumericRange } from '@/types/NewmericRange.ts';
import BottomSheet from '@/components/common/BottomSheet';
import ScrollPicker from '@/components/common/ScrollPicker';

interface NotificationTimeFunnelProps {
  toCompleteFunnel: (notificationTime: NumericRange<0, 17>) => void;
}

const NotificationTimeFunnel = ({ toCompleteFunnel }: NotificationTimeFunnelProps) => {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const [selectedTime, setSelectedTime] = useState<NumericRange<0, 17>>(0);

  const onSelect = (time: NumericRange<0, 17>) => {
    setSelectedTime(time);
  };

  const onConfirm = () => {
    if (selectedTime === null) return;
    console.log('selectedTime', selectedTime);
    setOpenBottomSheet(false);
    toCompleteFunnel(selectedTime);
  };

  const displayTime = (time: number) => {
    let fixedTime = time;
    if (time === 0) fixedTime = 12;
    else if (time > 12) fixedTime = time - 12;
    return `${fixedTime} ${time > 12 ? 'PM' : 'AM'}`;
  };

  return (
    <Screen className={'h-screen w-screen flex flex-col'}>
      <Header
        title={'닉네임'}
        left={
          <button>
            <왼쪽꺽쇠 />
          </button>
        }
        className={'text-regular-body font-semibold text-Gray900'}
      />
      <HeightBox height={53.5} />
      <RegisterFunnelTitle title={'거의 다 왔어요!\n알림 시간대를 설정해주세요'} />
      <HeightBox height={'100%'} />
      <CTAButton
        text={'선택하기'}
        className={cn('bg-BloomingGreen500')}
        onClick={() => setOpenBottomSheet(true)}
      />

      <HeightBox height={'30px'} />
      <BottomSheet
        title="알림 시간 설정"
        content={
          <div className={'h-[310px] px-2.5'}>
            <ScrollPicker
              start={6}
              end={23}
              selectedClassName={'bg-GrayOpacity100 text-Gray800 rounded-[10px]'}
              onSelect={(value) => onSelect(value as NumericRange<0, 17>)}
              selected={selectedTime}
              display={(value) => displayTime(value)}
            />
          </div>
        }
        actions={[
          <CTAButton text={'선택하기'} onClick={onConfirm} className={'bg-BloomingGreen500'} />,
        ]}
        isOpen={openBottomSheet}
        onClose={() => setOpenBottomSheet(false)}
      />
    </Screen>
  );
};

export default NotificationTimeFunnel;
