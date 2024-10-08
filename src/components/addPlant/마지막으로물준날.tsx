import { MouseEvent, useState } from 'react';
import TextField from '@/components/common/TextField';
import CTAButton from '@/components/common/CTAButton';
import BottomSheet from '@/components/common/BottomSheet';
import { 마지막으로물비료준날선택값목록_텍스트 } from '@/constants/addPlant.ts';
import SimpleDateScrollPicker from '@/components/addPlant/SimpleDateScrollPicker.tsx';
import DateScrollPicker from '@/components/addPlant/DateScrollPicker.tsx';

interface 마지막으로물준날Props {
  onClick: (value: number | string) => void;
  value: number | string;
  type?: 'simple' | 'exact';
}

const 마지막으로물준날 = ({ onClick, value, type = 'simple' }: 마지막으로물준날Props) => {
  const [selected, onSelect] = useState<number>(value as number);

  const [open, setOpen] = useState<boolean>(false);

  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [day, setDay] = useState<number>(new Date().getDate());

  const onMouseDown = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onComplete = () => {
    if (type === 'simple') {
      onClick(selected);
      setOpen(false);
      return;
    }

    onClick(`${year}-${month}-${day}`);
    setOpen(false);
  };

  return (
    <>
      <TextField
        title={'마지막으로 물 준 날'}
        placeholder={''}
        essential={true}
        onMouseDown={onMouseDown}
        value={
          type === 'simple'
            ? 마지막으로물비료준날선택값목록_텍스트.get(value.toString())
            : `${year}-${month}-${day}`
        }
        readOnly={true}
      />
      <BottomSheet
        title={'마지막으로 물 준 날'}
        content={
          type === 'simple' ? (
            <SimpleDateScrollPicker onSelect={onSelect} selected={selected} />
          ) : (
            <DateScrollPicker
              year={year}
              month={month}
              day={day}
              setYear={setYear}
              setMonth={setMonth}
              setDay={setDay}
            />
          )
        }
        actions={[<CTAButton text={'선택하기'} onClick={onComplete} />]}
        isOpen={open}
        onClose={onClose}
      />
    </>
  );
};

export default 마지막으로물준날;
