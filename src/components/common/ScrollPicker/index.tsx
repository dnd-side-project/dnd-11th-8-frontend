import { cn } from '@/utils.ts';
import { MouseEvent } from 'react';
import HeightBox from '@/components/common/HeightBox';

interface ScrollPickerProps {
  start: number;
  end: number;
  selectedClassName: string;
  onSelect: (value: number) => void;
  selected: number;
}

const ScrollPicker = ({ start, end, selectedClassName, onSelect, selected }: ScrollPickerProps) => {
  const onClick = (event: MouseEvent<HTMLDivElement>, value: number) => {
    const parentHeight = event?.currentTarget?.parentElement?.clientHeight ?? 0;
    const itemHeight = 62;
    const itemOffsetTop = event?.currentTarget?.offsetTop;

    const scrollPosition = itemOffsetTop - parentHeight / 2 + itemHeight / 2 - 62;

    event.currentTarget?.parentElement?.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });

    onSelect(value);
  };

  return (
    <div className={'flex-1 h-full overflow-y-scroll hide-scrollbar'}>
      <HeightBox height={62} />
      <HeightBox height={62} />
      {Array.from({ length: end - start + 1 }, (_, index) => start + index).map((item) => (
        <div
          onClick={(e) => onClick(e, item)}
          className={cn(
            'py-[10px] px-[24px] h-[62px] text-center text-regular-body font-medium flex items-center justify-center',
            selected === item ? selectedClassName : 'text-Gray400',
          )}
          key={`ScrollPicker-${item}-${start}-${end}`}
        >
          {item}
        </div>
      ))}
      <HeightBox height={62} />
      <HeightBox height={62} />
    </div>
  );
};

export default ScrollPicker;
