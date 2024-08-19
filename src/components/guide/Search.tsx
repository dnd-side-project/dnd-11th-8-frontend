import { useState } from 'react';
import SearchField from '../common/SearchField';
import ListComponent from '@/components/common/List';
import NoSearchPlant from './NoSearchPlant';
import useInternalRouter from '@/hooks/useInternalRouter';

const search = [
  {
    plantId: 1,
    image: 'https://jardin.kr/web/product/big/202308/be09433b70a3fce73324c50a27ed872d.jpg',
    name: '몬스테라 델리오사',
  },
  {
    plantId: 17,
    image: 'https://webp2.xplant.co.kr/data/item/17130/1713090111_l1.jpg',
    name: '병아리 눈물',
  },
  {
    plantId: 6,
    image: 'https://jardin.kr/web/product/big/202308/be09433b70a3fce73324c50a27ed872d.jpg',
    name: '몬스테라 어쩌구',
  },
  {
    plantId: 8,
    image: 'https://jardin.kr/web/product/big/202308/be09433b70a3fce73324c50a27ed872d.jpg',
    name: '몬스테라 저쩌구',
  },
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { push } = useInternalRouter();

  const handleSearch = (content: string) => {
    setSearchTerm(content);
  };

  // 검색어가 있을 때만 필터링
  const filteredResults = searchTerm
    ? search.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  return (
    <div>
      <div className="w-full py-[16px]">
        <div className="px-[16px] py-[14px]">
          <SearchField placeholder="검색" onSearch={handleSearch} />
        </div>
      </div>
      {searchTerm && filteredResults.length > 0
        ? filteredResults.map((item) => (
            <ListComponent
              key={item.plantId}
              image={item.image}
              name={item.name}
              onChange={() => push(`/guide/${item.plantId}`)}
            />
          ))
        : searchTerm && <NoSearchPlant />}
    </div>
  );
};

export default Search;
