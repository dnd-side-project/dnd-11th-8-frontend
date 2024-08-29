import { useGetRegions } from '@/queries/useGetRegions.ts';
import { regions } from '@/mocks/mockDatas/regions.ts';
import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'es-toolkit';

interface RegionListProps {
  search: string;
  onSelectLocation: (location: (typeof regions)[number]) => void;
}

export const RegionList = ({ onSelectLocation, search }: RegionListProps) => {
  const [deferredSearch, setSearch] = useState(search);
  const { data: locationList } = useGetRegions(deferredSearch);

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedUpdateSearch = useCallback(debounce(updateSearch, 300), []);

  useEffect(() => {
    debouncedUpdateSearch(search);
  }, [search, debouncedUpdateSearch]);

  return (
    <ul className={'h-full overflow-auto hide-scrollbar'}>
      {locationList.map((location) => (
        <li
          className={'py-4 text-regular-body text-Gray800 font-medium'}
          key={`searched-location-list-${location.id}`}
          onClick={() => onSelectLocation(location)}
        >
          {location.name}
        </li>
      ))}
    </ul>
  );
};
