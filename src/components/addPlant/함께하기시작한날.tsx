import { MouseEventHandler, useState } from 'react';

import TextField from '@/components/common/TextField';
import BottomSheet from '@/components/common/BottomSheet';
import CTAButton from '@/components/common/CTAButton';
import DateScrollPicker from '@/components/addPlant/DateScrollPicker.tsx';
import { YyMmDdDate } from '@/types/date.ts';
import { prefixWithZero } from '@/utils/date/prefixWithZero.ts';

interface 함께하기시작한날Props {
  onClick: (value: YyMmDdDate) => void;
  value: YyMmDdDate | null;
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
        value={value ?? ''}
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
            endDate={new Date()}
          />
        }
        actions={[
          <CTAButton
            onClick={() => {
              onClick(
                `${year}-${prefixWithZero(month)}-${prefixWithZero(day)}` as `${number}-${number}-${number}`,
              );
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
