import TextField from '@/components/common/TextField';
import IconSearchMono from '@/assets/icon/icon-search-mono.tsx';
import SearchPlantPage from '@/pages/SearchPlantPage.tsx';
import { MouseEventHandler, useState } from 'react';
import { usePlantTypeSearchParams } from '@/hooks/usePlantTypeSearchParams.ts';

const PlantTypeTextField = () => {
  const [open, setOpen] = useState(false);
  const { plantType } = usePlantTypeSearchParams();

  const onMouseDown: MouseEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <TextField
        title={'식물 종류'}
        placeholder={'검색'}
        essential={true}
        icon={<IconSearchMono />}
        value={plantType ?? ''}
        onMouseDown={onMouseDown}
      />
      {open && (
        <div className={'w-screen h-screen fixed top-0 left-0 bg-white z-50'}>
          <SearchPlantPage onClose={() => setOpen(false)} />
        </div>
      )}
    </>
  );
};

export default PlantTypeTextField;
