import TextField from '@/components/common/TextField';
import ScrollPicker from '@/components/common/ScrollPicker';
import CTAButton from '@/components/common/CTAButton';
import BottomSheet from '@/components/common/BottomSheet';
import { MouseEvent, useState } from 'react';
import { getEndDayOfMonth } from '@/utils/date/getEndDayOfMonth.ts';

interface 마지막으로물준날Props {
  onClick: (value: `${number}-${number}-${number}`) => void;
  value: `${number}-${number}-${number}`;
}

const 마지막으로물준날 = ({ onClick, value }: 마지막으로물준날Props) => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [day, setDay] = useState<number>(new Date().getDate());

  const [open, setOpen] = useState<boolean>(false);

  const onMouseDown = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TextField
        title={'마지막으로 물 준 날'}
        placeholder={''}
        essential={false}
        onMouseDown={onMouseDown}
        value={value}
        readOnly={true}
      />
      <BottomSheet
        title={'마지막으로 물 준 날'}
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
              end={getEndDayOfMonth(year, month)}
              onSelect={setDay}
              selectedClassName={'bg-GrayOpacity100 text-Gray800 rounded-r-[10px]'}
              selected={day}
            />
          </div>
        }
        actions={[
          <CTAButton
            text={'선택하기'}
            onClick={() => {
              onClick(`${year}-${month}-${day}`);
              onClose();
            }}
            className={'bg-BloomingGreen500'}
          />,
        ]}
        isOpen={open}
        onClose={onClose}
      />
    </>
  );
};

export default 마지막으로물준날;
