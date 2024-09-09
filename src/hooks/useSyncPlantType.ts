import { useEffect } from 'react';
import { AddPlantFormKey, AddPlantFormValue } from '@/pages/AddPlantPage.tsx';
import { usePlantTypeSearchParams } from '@/hooks/usePlantTypeSearchParams.ts';

interface UseSyncPlantTypeParams {
  handler: (key: AddPlantFormKey, value: AddPlantFormValue['value']) => void;
}

export const useSyncPlantType = ({ handler }: UseSyncPlantTypeParams) => {
  const { plantId, plantType } = usePlantTypeSearchParams();

  useEffect(() => {
    handler('plantId', plantId);
  }, [plantId]);

  useEffect(() => {
    if (plantType !== null && plantType !== '') {
      handler('scientificName', plantType);
    }
  }, [plantType]);
};
