import { useSearchParams } from 'react-router-dom';

export const usePlantTypeSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const plantType = searchParams.get('plantType');
  const plantId = searchParams.get('plantId');

  const setPlantType = (plantType: string, plantId?: number) => {
    if (plantId !== undefined) {
      setSearchParams({ plantType, plantId: plantId.toString() }, { replace: false });
      return;
    }

    setSearchParams({ plantType }, { replace: false });
  };

  return {
    plantType,
    setPlantType,
    plantId,
  };
};
