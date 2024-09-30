/// <reference types="vite-plugin-svgr/client" />
import PlantIcon1 from '@/assets/icon/plants/1.svg';
import PlantIcon2 from '@/assets/icon/plants/2.svg';
import PlantIcon3 from '@/assets/icon/plants/3.svg';
import PlantIcon4 from '@/assets/icon/plants/4.svg';
import PlantIcon5 from '@/assets/icon/plants/5.svg';
import PlantIcon6 from '@/assets/icon/plants/6.svg';
import PlantIcon7 from '@/assets/icon/plants/7.svg';
import PlantIcon8 from '@/assets/icon/plants/8.svg';
import PlantIcon9 from '@/assets/icon/plants/9.svg';
import PlantIcon10 from '@/assets/icon/plants/10.svg';
import { random } from 'es-toolkit';

const illustrators = [
  {
    icon: PlantIcon1,
    left: 71.74,
    right: 68.5,
  },
  {
    icon: PlantIcon2,
    left: 68.62,
    right: 67.84,
  },
  {
    icon: PlantIcon3,
    left: 73.72,
    right: 62.74,
  },
  {
    icon: PlantIcon4,
    left: 83.83,
    right: 52.63,
  },
  {
    icon: PlantIcon5,
    left: 69.82,
    right: 66.84,
  },
  {
    icon: PlantIcon6,
    left: 52.68,
    right: 83.78,
  },
  {
    icon: PlantIcon7,
    left: 65.97,
    right: 71.65,
  },
  {
    icon: PlantIcon8,
    left: 58.61,
    right: 77.85,
  },
  {
    icon: PlantIcon9,
    left: 65.23,
    right: 71.24,
  },
  {
    icon: PlantIcon10,
    left: 74.53,
    right: 62.25,
  },
];

export const getRandomIllustrator = () => {
  const randomIndex = Number(random(0, illustrators.length - 1).toFixed(0));

  return illustrators[randomIndex];
};
