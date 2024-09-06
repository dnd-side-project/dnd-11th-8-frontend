import { atom } from 'jotai';
import { LocationQueryParams } from '@/apis/myPlant/getMyAllPlant.ts';

const filterQueryAtom = atom<LocationQueryParams['sort']>('created_desc');
export default filterQueryAtom;
