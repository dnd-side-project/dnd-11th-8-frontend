import humidWeather from '@/assets/icon/humidWeather.svg';
import pestWeather from '@/assets/icon/pest.svg';
import { BsCloudSnow } from 'react-icons/bs';
import { MdOutlineWbSunny } from 'react-icons/md';
import { GiGroundSprout } from 'react-icons/gi';

export const weatherMessageIcon = {
  HUMIDITY: humidWeather,
  INSECT: pestWeather,
  COLD: BsCloudSnow,
  HOT: MdOutlineWbSunny,
  DRY: GiGroundSprout,
} as const;
