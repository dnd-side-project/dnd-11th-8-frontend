import { MouseEvent, useState } from 'react';

import TextField from '@/components/common/TextField';
import BottomSheet from '@/components/common/BottomSheet';
import CTAButton from '@/components/common/CTAButton';
import { cn } from '@/utils.ts';
import {
  마지막으로물비료준날선택값목록,
  마지막으로물비료준날선택값목록_텍스트,
} from '@/constants/addPlant.ts';

interface 마지막으로비료준날Props {
  onClick: (value: number) => void;
  value: number;
}

const 마지막으로비료준날 = ({ onClick, value }: 마지막으로비료준날Props) => {
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);
  const [selected, onSelect] = useState(value);

  const onMouseDown = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setOpenBottomSheet(true);
  };

  const selectButtonClickHandler = (target: number) => {
    onClick(target);
    setOpenBottomSheet(false);
  };

  return (
    <>
      <TextField
        title={'마지막으로 비료 준 날'}
        placeholder={''}
        essential={true}
        onMouseDown={onMouseDown}
        value={마지막으로물비료준날선택값목록_텍스트.get(value.toString())}
        readOnly={true}
      />
      <BottomSheet
        title={'마지막으로 비료 준 날'}
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
            className={'bg-BloomingGreen500'}
            onClick={() => selectButtonClickHandler(selected)}
          />,
        ]}
        isOpen={openBottomSheet}
        onClose={() => setOpenBottomSheet(false)}
      />
    </>
  );
};

export default 마지막으로비료준날;
