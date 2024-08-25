import { 마지막으로물비료준날선택값목록 } from '@/constants/addPlant.ts';
import { cn } from '@/utils.ts';

interface 마지막으로물준날Props {
  onSelect: (value: number) => void;
  selected: number;
}

const SimpleDateScrollPicker = ({ selected, onSelect }: 마지막으로물준날Props) => {
  return (
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
  );
};

export default SimpleDateScrollPicker;
