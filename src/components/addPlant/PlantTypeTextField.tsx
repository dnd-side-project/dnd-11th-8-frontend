import TextField from '@/components/common/TextField';
import IconSearchMono from '@/assets/icon/icon-search-mono.tsx';
import useInternalRouter from '@/hooks/useInternalRouter.ts';

const PlantTypeTextField = () => {
  const router = useInternalRouter();
  return (
    <button
      type={'button'}
      onClick={(e) => {
        e.stopPropagation();
        router.push('/my-plant/search');
      }}
    >
      <TextField
        title={'식물 종류'}
        placeholder={'검색'}
        essential={true}
        icon={<IconSearchMono />}
        onChange={() => {}}
      />
    </button>
  );
};

export default PlantTypeTextField;
