import { ReactNode, useCallback, useState } from 'react';
import SearchField from '../common/SearchField';
import ListComponent from '@/components/common/List';
import NoSearchPlant from './NoSearchPlant';
import useInternalRouter from '@/hooks/useInternalRouter';
import { useSearchPlant } from '@/queries/useSearchPlant.ts';
import { debounce } from 'es-toolkit';
import ListSkeleton from '@/components/common/Skeleton/ListSkeleton.tsx';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { push } = useInternalRouter();
  const { data: searchedPlants, isLoading } = useSearchPlant(searchTerm);

  const handleSearch = useCallback(debounce(setSearchTerm, 500), []);

  let content: null | ReactNode | ReactNode[] = null;

  if (searchTerm === '') {
    content = null;
  } else if (searchedPlants?.length === 0) {
    content = <NoSearchPlant />;
  } else {
    content = searchedPlants?.map((item) => (
      <ListComponent
        key={item.plantId}
        image={item.imageUrl}
        name={item.name}
        onChange={() => push(`/guide/${item.plantId}`)}
      />
    ));
  }

  return (
    <div>
      <div className="w-full py-[16px]">
        <div className="px-[16px] py-[14px]">
          <SearchField placeholder="검색" onSearch={handleSearch} />
        </div>
      </div>
      {isLoading ? <ListSkeleton /> : content}
    </div>
  );
};

export default Search;
