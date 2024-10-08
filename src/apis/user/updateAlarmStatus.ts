import { privateAxios } from '@/libs/baseAxios.ts';

export const updateAlarmStatus = (alarmStatus: boolean) =>
  privateAxios.patch('/users/my/alarm', { alarmStatus });
