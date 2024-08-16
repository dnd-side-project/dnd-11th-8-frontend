import { useSearchParams } from 'react-router-dom';

export const usePlantTypeSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const plantType = searchParams.get('plantType');
  const plantId = searchParams.get('plantId');

  const setPlantType = (plantType: string, plantId: string) => {
    setSearchParams({ plantType }, { replace: true });
    setSearchParams({ plantId }, { replace: true });
  };

  return {
    plantType,
    setPlantType,
    plantId,
  };
};
