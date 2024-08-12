import TextField from '@/components/common/TextField';
import IconSearchMono from '@/assets/icon/icon-search-mono.tsx';
import SearchPlantPage from '@/pages/SearchPlantPage.tsx';
import { useEffect, useState } from 'react';
import { usePlantTypeSearchParams } from '@/hooks/usePlantTypeSearchParams.ts';

interface PlantTypeTextFieldProps {
  handleChange: (key: '식물 종류', value: { value: string; required: boolean }) => void;
}

const PlantTypeTextField = ({ handleChange }: PlantTypeTextFieldProps) => {
  const [open, setOpen] = useState(false);
  const { plantType } = usePlantTypeSearchParams();

  useEffect(() => {
    if (plantType) {
      handleChange('식물 종류', {
        value: plantType,
        required: true,
      });
    }
  }, [plantType, handleChange]);

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        <TextField
          title={'식물 종류'}
          placeholder={'검색'}
          essential={true}
          icon={<IconSearchMono />}
          onChange={(e) => handleChange('식물 종류', { value: e.target.value, required: true })}
          value={plantType ?? ''}
        />
      </div>
      {open && (
        <div className={'w-screen h-screen fixed top-0 left-0 bg-white z-50'}>
          <SearchPlantPage onClose={() => setOpen(false)} />
        </div>
      )}
    </>
  );
};

export default PlantTypeTextField;
