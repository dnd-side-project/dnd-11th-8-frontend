interface MyProfiles {
  nickname: string;
  myPlantCount: number;
  alarmCount: number;
  alarmStatus: boolean;
  alarmTime: number;
}

export interface MyProfileProps {
  justImg?: boolean;
  myProfile?: MyProfiles;
}
