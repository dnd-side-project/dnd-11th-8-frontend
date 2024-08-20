import { useState, useEffect } from 'react';
import Toggle from '../common/Toggle';
import pencil from '@/assets/icon/pencil.svg';
import BottomSheet from '@/components/common/BottomSheet';
import { MyProfileProps } from '@/types/profile';

const timeMap = {
  'AM 06': 0,
  'AM 07': 1,
  'AM 08': 2,
  'AM 09': 3,
  'AM 10': 4,
  'AM 11': 5,
  'PM 12': 6,
  'PM 01': 7,
  'PM 02': 8,
  'PM 03': 9,
  'PM 04': 10,
  'PM 05': 11,
  'PM 06': 12,
  'PM 07': 13,
  'PM 08': 14,
  'PM 09': 15,
  'PM 10': 16,
  'PM 11': 17,
  'AM 12': 18,
};

const reverseTimeMap = Object.fromEntries(
  Object.entries(timeMap).map(([key, value]) => [value, key]),
);

const getTimeLabel = (alarmTime: number | null): string => {
  if (alarmTime === null || !(alarmTime in reverseTimeMap)) {
    return '시간 선택';
  }
  return reverseTimeMap[alarmTime];
};

const SetNotifications: React.FC<MyProfileProps> = ({ myProfile }) => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  useEffect(() => {
    if (myProfile?.alarmStatus !== undefined) {
      setIsChecked(myProfile.alarmStatus);
    }
    setSelectedTime(getTimeLabel(myProfile?.alarmTime ?? null));
  }, [myProfile?.alarmStatus, myProfile?.alarmTime]);

  const handleCheckedChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <div className="flex flex-col gap-[16px] mt-[25px]">
      <section>
        <p className="px-[20px] text-Gray800 text-[17px] font-semibold">알림 설정</p>
      </section>
      <section className="flex flex-col gap-[10px]">
        <div className="box-border flex w-[calc(100%-40px)] mx-auto px-[24px] py-[16px] bg-white border border-GrayOpacity100 items-center justify-between rounded-[10px]">
          <p className="text-Gray800 text-[15px] font-medium">블루밍 알림 설정</p>
          <Toggle checked={isChecked} onCheckedChange={handleCheckedChange} />
        </div>
        {isChecked && (
          <div className="box-border flex w-[calc(100%-40px)] mx-auto px-[24px] py-[16px] bg-white border border-GrayOpacity100 items-center justify-between rounded-[10px] text-[15px] font-medium">
            <p className="text-Gray800">알림 시간대</p>
            <div className="flex gap-[10px] items-center">
              <p className="text-BloomingGreen500">{selectedTime && selectedTime + ':00'}</p>
              <img
                src={pencil}
                alt="수정하기 아이콘"
                className="cursor-pointer"
                onClick={() => setBottomSheetOpen(true)}
              />
            </div>
          </div>
        )}
      </section>

      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setBottomSheetOpen(false)}
        title="알림 시간 설정"
        content={
          <div className="px-[24px] py-[10px]">
            <div className="max-h-[260px] overflow-y-auto">
              <ul className="p-0 list-none">
                {Object.keys(timeMap).map((time) => (
                  <li
                    key={time}
                    className={`text-[17px] rounded-[10px] py-[15px] px-[24px] text-center transition-colors ${
                      selectedTime === time
                        ? 'bg-GrayOpacity100 text-black'
                        : 'text-Gray400 hover:bg-GrayOpacity100 hover:text-black'
                    } cursor-pointer`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
        actions={[
          <button
            key="confirm"
            onClick={() => setBottomSheetOpen(false)}
            className="w-full py-[18px] px-[28px] bg-BloomingGreen500 text-white rounded-[16px]"
          >
            확인
          </button>,
        ]}
        headerAsLabel={false}
      />
    </div>
  );
};

export default SetNotifications;