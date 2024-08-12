import { useSearchParams } from 'react-router-dom';

export const usePlantTypeSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const plantType = searchParams.get('plantType');

  const setPlantType = (plantType: string) => {
    setSearchParams({ plantType }, { replace: true });
  };

  return {
    plantType,
    setPlantType,
  };
};
