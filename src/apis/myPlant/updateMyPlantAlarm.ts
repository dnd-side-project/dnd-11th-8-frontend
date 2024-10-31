import { privateAxios } from '@/libs/baseAxios.ts';

export interface UpdateMyPlantAlarmParams {
  plantId: number;
  body: {
    waterAlarm: boolean;
    waterPeriod?: number;
    fertilizerAlarm: boolean;
    fertilizerPeriod?: number;
    healthCheckAlarm: boolean;
  };
}

export const updateMyPlantAlarm = ({ plantId, body }: UpdateMyPlantAlarmParams) => {
  return privateAxios.patch(`/myplants/${plantId}/alarm`, body);
};
