import difficulty from '@/assets/icon/difficulty.svg';
import water from '@/assets/icon/watering-pot-green.svg';
import temperature from '@/assets/icon/temperature-green.svg';
import location from '@/assets/icon/door-green.svg';
import pests from '@/assets/icon/pest-filled-green.svg';
import fertilizer from '@/assets/icon/sprout-2-green.svg';
import size from '@/assets/icon/size-green.svg';
import toxicity from '@/assets/icon/poison-green.svg';
import light from '@/assets/icon/light-green.svg';
import humidity from '@/assets/icon/water-percent-green.svg';
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
