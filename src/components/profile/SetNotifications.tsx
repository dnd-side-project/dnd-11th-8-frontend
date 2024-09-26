import { useEffect, useState } from 'react';
import Toggle from '../common/Toggle';
import Pencil from '@/assets/icon/pencil-circular-gray.svg?react';
import BottomSheet from '@/components/common/BottomSheet';
import { MyProfileProps } from '@/types/profile';
import { useUpdateAlarmStatus } from '@/queries/useUpdateAlarmStatus.ts';
import { useUpdateAlarmTime } from '@/queries/useUpdateAlarmTime.ts';

const timeMap = {
  'AM 06-07': 0,
  'AM 07-08': 1,
  'AM 08-09': 2,
  'AM 09-10': 3,
  'AM 10-11': 4,
  'AM 11-12': 5,
  'PM 12-01': 6,
  'PM 01-02': 7,
  'PM 02-03': 8,
  'PM 03-04': 9,
  'PM 04-05': 10,
  'PM 05-06': 11,
  'PM 06-07': 12,
  'PM 07-08': 13,
  'PM 08-09': 14,
  'PM 09-10': 15,
  'PM 10-11': 16,
  'PM 11-12': 17,
  'AM 12-01': 18,
};

const getTimeLabel = (alarmTime: number): string => {
  const label = Object.entries(timeMap).find((item) => item[1] === alarmTime);

  if (!label) {
    throw Error('유효하지 않은 알람 시간대 입니다.');
  }

  return label[0];
};

const SetNotifications: React.FC<MyProfileProps> = ({ myProfile }) => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<number | undefined>();
  const { mutate: updateAlarmStatus } = useUpdateAlarmStatus();
  const { mutate: updateAlarmTime } = useUpdateAlarmTime();

  const handleCheckedChange = () => {
    updateAlarmStatus(!myProfile.alarmStatus);
  };

  const handleTimeSelect = (value: number) => {
    setSelectedTime(value);
  };

  useEffect(() => {
    setSelectedTime(myProfile.alarmTime);
  }, [myProfile.alarmTime]);

  const handleAlarmTimeSubmit = () => {
    if (!selectedTime) return;

    updateAlarmTime(selectedTime);
    setBottomSheetOpen(false);
  };

  return (
    <div className="flex flex-col gap-[16px] mt-[25px]">
      <section>
        <p className="px-[20px] text-Gray800 text-[17px] font-semibold">알림 설정</p>
      </section>
      <section className="flex flex-col gap-[10px]">
        <div className="box-border flex w-[calc(100%-40px)] mx-auto px-[24px] py-[16px] bg-white border border-GrayOpacity100 items-center justify-between rounded-[10px]">
          <p className="text-Gray800 text-[15px] font-medium">블루밍 알림 설정</p>
          <Toggle checked={myProfile.alarmStatus} onCheckedChange={() => handleCheckedChange()} />
        </div>
        {myProfile.alarmStatus && (
          <div className="box-border flex w-[calc(100%-40px)] mx-auto px-[24px] py-[16px] bg-white border border-GrayOpacity100 items-center justify-between rounded-[10px] text-[15px] font-medium">
            <p className="text-Gray800">알림 시간대</p>
            <div className="flex gap-[10px] items-center">
              <p className="text-BloomingGreen500">{getTimeLabel(myProfile.alarmTime)}</p>
              <button className="cursor-pointer" onClick={() => setBottomSheetOpen(true)}>
                <Pencil />
              </button>
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
                {Object.entries(timeMap).map(([title, value]) => (
                  <li
                    key={title}
                    className={`text-[17px] rounded-[10px] py-[15px] px-[24px] text-center transition-colors ${
                      selectedTime === value
                        ? 'bg-GrayOpacity100 text-black'
                        : 'text-Gray400 hover:bg-GrayOpacity100 hover:text-black'
                    } cursor-pointer`}
                    onClick={() => handleTimeSelect(value)}
                  >
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
        actions={[
          <button
            key="confirm"
            onClick={handleAlarmTimeSubmit}
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
