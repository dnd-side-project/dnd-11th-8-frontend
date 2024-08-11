import Label from '@/components/common/Label';
import Toggle from '@/components/common/Toggle';
import NotificationToggle from '@/components/addPlant/NotificationToggle.tsx';
import { useState } from 'react';

const NotificationToggleList = () => {
  const [notificationEnabled, setNotificationEnabled] = useState<boolean>(false);

  const notificationItems = [
    {
      name: '물 주기',
    },
    {
      name: '비료',
    },
    {
      name: '건강확인',
    },
  ];

  return (
    <div className={'flex flex-col gap-[10px]'}>
      <div className={'flex flex-row items-center justify-between'}>
        <Label htmlFor={'알림 받기'} title={'알림 받기'} essential={false} />
        <Toggle onCheckedChange={(checked) => setNotificationEnabled(checked)} />
      </div>
      {notificationEnabled && (
        <div className={'flex flex-col gap-[10px]'}>
          {notificationItems.map((item) => (
            <NotificationToggle key={`NotificationToggle-${item.name}`} name={item.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationToggleList;
