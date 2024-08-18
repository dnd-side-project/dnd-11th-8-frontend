import { cn } from '@/utils.ts';
import { useEffect, useRef } from 'react';
import HeightBox from '@/components/common/HeightBox';

interface ScrollPickerProps {
  start: number;
  end: number;
  selectedClassName: string;
  onSelect: (value: number) => void;
  selected: number;
  display?: (value: number) => string;
}

const ScrollPicker = ({
  start,
  end,
  display,
  selectedClassName,
  onSelect,
  selected,
}: ScrollPickerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialPosition = (selected - start) * 62;
    ref.current?.scrollTo({
      top: initialPosition,
      behavior: 'smooth',
    });
  }, [selected, start]);

  const onClick = (value: number) => {
    onSelect(value);
  };

  return (
    <div className={'h-full w-full overflow-y-auto hide-scrollbar'} ref={ref}>
      <HeightBox height={62} />
      <HeightBox height={62} />
      {Array.from({ length: end - start + 1 }, (_, index) => start + index).map((item) => (
        <div
          className={cn(
            'py-[10px] px-[24px] h-[62px] text-center text-regular-body font-medium flex items-center justify-center',
            selected === item ? selectedClassName : 'text-Gray400',
          )}
          onClick={() => onClick(item)}
          key={`ScrollPicker-${item}-${start}-${end}`}
        >
          {display !== undefined ? display(item) : item}
        </div>
      ))}
      <HeightBox height={62} />
      <HeightBox height={62} />
    </div>
  );
};

export default ScrollPicker;
