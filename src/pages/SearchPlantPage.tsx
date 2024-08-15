import Screen from '@/layouts/Screen.tsx';
import Header from '@/components/common/Header';
import 왼쪽꺽쇠 from '@/assets/icon/왼쪽꺽쇠.tsx';
import SearchField from '@/components/common/SearchField';
import HeightBox from '@/components/common/HeightBox';
import { Suspense, useCallback, useState } from 'react';
import SearchedPlantList from '@/components/searchPlant/SearchedPlantList.tsx';
import { debounce } from 'es-toolkit';

interface SearchPlantPageProps {
  onClose: () => void;
}

// TODO: 서스펜스 폴백 수정

const SearchPlantPage = ({ onClose }: SearchPlantPageProps) => {
  const [query, setQuery] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetQuery = useCallback(debounce(setQuery, 200), []);

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
      <Suspense fallback={<div>로딩중...</div>}>
        <SearchedPlantList query={query} onClose={onClose} />
      </Suspense>
    </Screen>
  );
};

export default SearchPlantPage;
