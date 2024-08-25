import ScrollPicker from '@/components/common/ScrollPicker';
import { getEndDayOfMonth } from '@/utils/date/getEndDayOfMonth.ts';

interface DateScrollPickerProps {
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  setDay: (day: number) => void;
  year: number;
  month: number;
  day: number;
}

const DateScrollPicker = ({
  year,
  month,
  day,
  setDay,
  setYear,
  setMonth,
}: DateScrollPickerProps) => {
  return (
    <div className={'px-[10px] h-[310px] flex flex-row mt-[10px]'}>
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
  );
};

export default DateScrollPicker;
