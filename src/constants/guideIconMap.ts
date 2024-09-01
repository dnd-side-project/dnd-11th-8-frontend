import difficulty from '@/assets/icon/difficulty.svg';
import water from '@/assets/icon/watering.svg';
import temperature from '@/assets/icon/temperature.svg';
import location from '@/assets/icon/place.svg';
import pests from '@/assets/icon/worm.svg';
import fertilizer from '@/assets/icon/manure.svg';
import size from '@/assets/icon/size.svg';
import toxicity from '@/assets/icon/poison.svg';
import light from '@/assets/icon/light.svg';
import humidity from '@/assets/icon/humidity.svg';
import GuideDetailsProps from '@/types/GuideDetailsProps.ts';

type IconKey = keyof GuideDetailsProps['simpleView'] | keyof GuideDetailsProps['detailView'];

type GuideIconMap = Record<IconKey, string>;

export const guideDetailIconMap: GuideIconMap = {
  difficulty,
  water,
  temperature,
  location,
  pests,
  fertilizer,
  size,
  toxicity,
  light,
  humidity,
};
