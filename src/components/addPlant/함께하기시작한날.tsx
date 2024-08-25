import { MouseEventHandler, useState } from 'react';

import TextField from '@/components/common/TextField';
import BottomSheet from '@/components/common/BottomSheet';
import CTAButton from '@/components/common/CTAButton';
import DateScrollPicker from '@/components/addPlant/DateScrollPicker.tsx';

interface 함께하기시작한날Props {
  onClick: (value: `${number}-${number}-${number}`) => void;
  value: `${number}-${number}-${number}`;
}

const 함께하기시작한날 = ({ onClick, value }: 함께하기시작한날Props) => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [day, setDay] = useState<number>(new Date().getDate());

  const [open, setOpen] = useState<boolean>(false);

  const onMouseDown: MouseEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TextField
        title={'함께하기 시작한 날'}
        placeholder={''}
        essential={false}
        onMouseDown={onMouseDown}
        value={value}
        readOnly
      />
      <BottomSheet
        title={'함께하기 시작한 날'}
        content={
          <DateScrollPicker
            day={day}
            month={month}
            setDay={setDay}
            setMonth={setMonth}
            setYear={setYear}
            year={year}
          />
        }
        actions={[
          <CTAButton
            onClick={() => {
              onClick(`${year}-${month}-${day}`);
              onClose();
            }}
            text={'선택하기'}
            className={'bg-BloomingGreen500'}
          />,
        ]}
        isOpen={open}
        onClose={onClose}
      />
    </>
  );
};

export default 함께하기시작한날;
