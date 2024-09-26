import HumidWeather from '@/assets/icon/rainy-cloud-gray.svg?react';
import PestWeather from '@/assets/icon/pest-outlined-gray.svg?react';
import { BsCloudSnow } from 'react-icons/bs';
import { MdOutlineWbSunny } from 'react-icons/md';
import { GiGroundSprout } from 'react-icons/gi';

export const weatherMessageIcon = {
  HUMIDITY: HumidWeather,
  INSECT: PestWeather,
  COLD: BsCloudSnow,
  HOT: MdOutlineWbSunny,
  DRY: GiGroundSprout,
} as const;
