import { privateAxios } from '@/libs/baseAxios.ts';
import { MyPlantDetailType } from '@/mocks/mockDatas/myPlantDetail.ts';

export interface UpdateMyPlantAlarmParams {
  plantId: number;
  key: keyof AlarmDataState;
  value: AlarmDataState[keyof AlarmDataState];
}

export type AlarmDataState = Pick<
  MyPlantDetailType,
  'waterAlarm' | 'waterPeriod' | 'fertilizerAlarm' | 'fertilizerPeriod' | 'healthCheckAlarm'
>;

export const updateMyPlantAlarm = ({ plantId, key, value }: UpdateMyPlantAlarmParams) => {
  const data: Partial<AlarmDataState> = {
    [key]: value,
  };

  return privateAxios.patch(`/myplants/${plantId}/alarm`, data);
};
