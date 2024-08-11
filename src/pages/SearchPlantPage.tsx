import Screen from '@/layouts/Screen.tsx';
import Header from '@/components/common/Header';
import 왼쪽꺽쇠 from '@/assets/icon/왼쪽꺽쇠.tsx';
import useInternalRouter from '@/hooks/useInternalRouter.ts';
import SearchField from '@/components/common/SearchField';
import HeightBox from '@/components/common/HeightBox';

const SearchPlantPage = () => {
  const router = useInternalRouter();

  return (
    <Screen>
      <Header
        title={'식물 종류'}
        left={
          <button onClick={() => router.goBack()}>
            <왼쪽꺽쇠 />
          </button>
        }
      />
      <HeightBox height={30} />
      <SearchField placeholder={'검색'} />
    </Screen>
  );
};

export default SearchPlantPage;
