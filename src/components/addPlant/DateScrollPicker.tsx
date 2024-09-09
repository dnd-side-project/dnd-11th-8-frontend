import ScrollPicker from '@/components/common/ScrollPicker';
import { getEndDayOfMonth } from '@/utils/date/getEndDayOfMonth.ts';

interface DateScrollPickerProps {
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  setDay: (day: number) => void;
  year: number;
  month: number;
  day: number;
  endDate?: Date;
  startDate?: Date;
}

const DateScrollPicker = ({
  year,
  month,
  day,
  setDay,
  setYear,
  setMonth,
  endDate,
  startDate,
}: DateScrollPickerProps) => {
  return (
    <div className={'px-[10px] h-[310px] flex flex-row mt-[10px]'}>
      <ScrollPicker
        onSelect={setYear}
        start={startDate?.getFullYear() ?? 1950}
        end={endDate?.getFullYear() ?? 2024}
        selected={year}
        selectedClassName={'bg-GrayOpacity100 text-Gray800 rounded-l-[10px]'}
      />
      <ScrollPicker
        start={startDate === undefined ? 1 : startDate.getMonth() + 1}
        end={endDate === undefined ? 12 : endDate.getMonth() + 1}
        onSelect={setMonth}
        selectedClassName={'bg-GrayOpacity100 text-Gray800'}
        selected={month}
      />
      <ScrollPicker
        start={startDate?.getDate() ?? 1}
        end={
          endDate === undefined
            ? getEndDayOfMonth(year, month)
            : endDate.getFullYear() === year && endDate.getMonth() + 1 === month
              ? endDate.getDate()
              : getEndDayOfMonth(year, month)
        }
        onSelect={setDay}
        selectedClassName={'bg-GrayOpacity100 text-Gray800 rounded-r-[10px]'}
        selected={day}
      />
    </div>
  );
};

export default DateScrollPicker;
