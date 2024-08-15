import { atom } from 'jotai';

const filterQueryAtom = atom<{
  sort: string;
  direction: string;
}>({
  sort: 'CREATED',
  direction: 'ASC',
});
export default filterQueryAtom;
