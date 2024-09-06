import { privateAxios } from '@/libs/baseAxios.ts';

export const updateAlarmTime = (alarmTime: number) =>
  privateAxios.patch('/users/my/alarm-time', { alarmTime });
