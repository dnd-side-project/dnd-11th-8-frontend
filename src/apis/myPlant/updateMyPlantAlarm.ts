import { privateAxios } from '@/libs/baseAxios.ts';
import { MyPlantDetailType } from '@/mocks/mockDatas/myPlantDetail.ts';

export interface UpdateMyPlantAlarmParams {
  plantId: number;
  body: Partial<AlarmDataState>;
}

export type AlarmDataState = Pick<
  MyPlantDetailType,
  'waterAlarm' | 'waterPeriod' | 'fertilizerAlarm' | 'fertilizerPeriod' | 'healthCheckAlarm'
>;

export const updateMyPlantAlarm = ({ plantId, body }: UpdateMyPlantAlarmParams) => {
  return privateAxios.patch(`/myplants/${plantId}/alarm`, body);
};
