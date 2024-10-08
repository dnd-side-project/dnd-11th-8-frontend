import Screen from '@/layouts/Screen.tsx';
import Header from '@/components/common/Header';
import 왼쪽꺽쇠 from '@/assets/icon/left-arrow.svg?react';
import HeightBox from '@/components/common/HeightBox';
import RegisterFunnelTitle from '@/components/register/RegisterFunnelTitle.tsx';
import CTAButton from '@/components/common/CTAButton';
import { useState } from 'react';
import { NumericRange } from '@/types/NewmericRange.ts';
import BottomSheet from '@/components/common/BottomSheet';
import ScrollPicker from '@/components/common/ScrollPicker';

interface NotificationTimeFunnelProps {
  toCompleteFunnel: (notificationTime: NumericRange<1, 19>) => void;
  goBack: () => void;
}

const NotificationTimeFunnel = ({ toCompleteFunnel, goBack }: NotificationTimeFunnelProps) => {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const [selectedTime, setSelectedTime] = useState<NumericRange<1, 19>>(1);

  const onSelect = (time: NumericRange<1, 19>) => {
    setSelectedTime(time);
  };

  const onConfirm = () => {
    if (selectedTime === null) return;
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
          <button onClick={() => goBack()}>
            <왼쪽꺽쇠 />
          </button>
        }
        className={'text-regular-body font-semibold text-Gray900'}
      />
      <HeightBox height={53.5} />
      <RegisterFunnelTitle title={'거의 다 왔어요!\n알림 시간대를 설정해주세요'} />
      <HeightBox height={'100%'} />
      <CTAButton text={'선택하기'} onClick={() => setOpenBottomSheet(true)} />

      <HeightBox height={'30px'} />
      <BottomSheet
        title="알림 시간 설정"
        content={
          <div className={'h-[310px] px-2.5'}>
            <ScrollPicker
              start={5}
              end={23}
              selectedClassName={'bg-GrayOpacity100 text-Gray800 rounded-[10px]'}
              onSelect={(value) => onSelect((value - 4) as NumericRange<1, 19>)}
              selected={selectedTime + 4}
              display={(value) => displayTime(value)}
            />
          </div>
        }
        actions={[<CTAButton text={'선택하기'} onClick={onConfirm} />]}
        isOpen={openBottomSheet}
        onClose={() => setOpenBottomSheet(false)}
      />
    </Screen>
  );
};

export default NotificationTimeFunnel;
