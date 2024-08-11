import { MouseEvent, useState } from 'react';

import TextField from '@/components/common/TextField';
import BottomSheet from '@/components/common/BottomSheet';
import CTAButton from '@/components/common/CTAButton';
import ScrollPicker from '@/components/common/ScrollPicker';

const 함께하기시작한날 = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [day, setDay] = useState<number>(new Date().getDate());

  const [open, setOpen] = useState<boolean>(false);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <button onClick={onClick} type={'button'}>
        <TextField title={'함께하기 시작한 날'} placeholder={''} essential={false} />
      </button>
      <BottomSheet
        title={'함께하기 시작한 날'}
        content={
          <div className={'px-[10px] h-[310px] overflow-hidden flex flex-row mt-[10px]'}>
            <ScrollPicker
              onSelect={setYear}
              start={1950}
              end={2024}
              selected={year}
              selectedClassName={'bg-GrayOpacity100 text-Gray800 rounded-l-[10px]'}
            />
            <ScrollPicker
              start={1}
              end={12}
              onSelect={setMonth}
              selectedClassName={'bg-GrayOpacity100 text-Gray800'}
              selected={month}
            />
            <ScrollPicker
              start={1}
              end={31}
              onSelect={setDay}
              selectedClassName={'bg-GrayOpacity100 text-Gray800 rounded-r-[10px]'}
              selected={day}
            />
          </div>
        }
        actions={[<CTAButton text={'선택하기'} className={'bg-BloomingGreen500'} />]}
        isOpen={open}
        onClose={() => {}}
      />
    </>
  );
};

export default 함께하기시작한날;
