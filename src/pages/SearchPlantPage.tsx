import Screen from '@/layouts/Screen.tsx';
import Header from '@/components/common/Header';
import 왼쪽꺽쇠 from '@/assets/icon/왼쪽꺽쇠.tsx';
import SearchField from '@/components/common/SearchField';
import HeightBox from '@/components/common/HeightBox';
import { useCallback, useState } from 'react';
import SearchedPlantList from '@/components/searchPlant/SearchedPlantList.tsx';
import { debounce } from 'es-toolkit';
import { AsyncBoundary } from '@toss/async-boundary';
import ListSkeleton from '@/components/common/Skeleton/ListSkeleton.tsx';
import CTAButton from '@/components/common/CTAButton';

interface SearchPlantPageProps {
  onClose: () => void;
}

const SearchPlantPage = ({ onClose }: SearchPlantPageProps) => {
  const [query, setQuery] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetQuery = useCallback(debounce(setQuery, 500), []);

  return (
    <Screen>
      <Header
        title={'식물 종류'}
        left={
          <button onClick={onClose}>
            <왼쪽꺽쇠 />
          </button>
        }
      />
      <HeightBox height={30} />
      <SearchField placeholder={'검색'} onSearch={debouncedSetQuery} />
      <HeightBox height={30} />
      <AsyncBoundary
        pendingFallback={<ListSkeleton />}
        rejectedFallback={({ error, reset }) => (
          <div className={'flex flex-col items-center'}>
            <p className={'text-small-title font-semibold text-center text-Gray900'}>
              에러가 발생했어요!
            </p>
            <p className={'pt-4 text-center text-regular-body text-Gray500'}>{error.message}</p>
            <CTAButton
              text={'다시시도'}
              className={'bg-BloomingGreen500 w-fit mt-8'}
              onClick={() => reset()}
            />
          </div>
        )}
      >
        <SearchedPlantList query={query} onClose={onClose} />
      </AsyncBoundary>
    </Screen>
  );
};

export default SearchPlantPage;
