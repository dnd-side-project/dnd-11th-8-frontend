import Screen from '@/layouts/Screen.tsx';
import Header from '@/components/common/Header';
import 왼쪽꺽쇠 from '@/assets/icon/왼쪽꺽쇠.tsx';
import SearchField from '@/components/common/SearchField';
import HeightBox from '@/components/common/HeightBox';
import { useCallback, useState } from 'react';
import SearchedPlantList from '@/components/searchPlant/SearchedPlantList.tsx';
import { debounce } from 'es-toolkit';

interface SearchPlantPageProps {
  onClose: () => void;
}

const SearchPlantPage = ({ onClose }: SearchPlantPageProps) => {
  const [query, setQuery] = useState('');

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
      <SearchedPlantList query={query} onClose={onClose} />
    </Screen>
  );
};

export default SearchPlantPage;
