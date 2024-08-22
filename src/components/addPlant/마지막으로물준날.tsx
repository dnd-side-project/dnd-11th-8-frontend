import TextField from '@/components/common/TextField';
import CTAButton from '@/components/common/CTAButton';
import BottomSheet from '@/components/common/BottomSheet';
import { MouseEvent, useState } from 'react';
import { cn } from '@/utils.ts';
import {
  마지막으로물비료준날선택값목록,
  마지막으로물비료준날선택값목록_텍스트,
} from '@/constants/addPlant.ts';

interface 마지막으로물준날Props {
  onClick: (value: number) => void;
  value: number;
}

const 마지막으로물준날 = ({ onClick, value }: 마지막으로물준날Props) => {
  const [selected, onSelect] = useState<number>(0);

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
        essential={true}
        onMouseDown={onMouseDown}
        value={마지막으로물비료준날선택값목록_텍스트.get(value.toString())}
        readOnly={true}
      />
      <BottomSheet
        title={'마지막으로 물 준 날'}
        content={
          <div className={'h-full w-full overflow-y-auto hide-scrollbar px-[10px]'}>
            {마지막으로물비료준날선택값목록.map((item) => (
              <div
                className={cn(
                  'py-[10px] px-[24px] h-[62px] text-center text-regular-body font-medium flex items-center justify-center',
                  selected === item.value
                    ? 'bg-GrayOpacity100 text-Gray800 rounded-[10px]'
                    : 'text-Gray400',
                )}
                onClick={() => onSelect(item.value)}
                key={`ScrollPicker-${item}-${item.name}`}
              >
                {item.name}
              </div>
            ))}
          </div>
        }
        actions={[
          <CTAButton
            text={'선택하기'}
            onClick={() => {
              onClick(selected);
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
