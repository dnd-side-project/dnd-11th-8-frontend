import { useGetRegions } from '@/queries/useGetRegions.ts';
import { regions } from '@/mocks/mockDatas/regions.ts';
import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'es-toolkit';
import { cn } from '@/utils.ts';

interface RegionListProps {
  search: string;
  selectedLocation: { id: number; name: string } | null;
  onSelectLocation: (location: (typeof regions)[number]) => void;
}

export const RegionList = ({ onSelectLocation, search, selectedLocation }: RegionListProps) => {
  const [deferredSearch, setSearch] = useState(search);
  const { data: locationList } = useGetRegions(deferredSearch);

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  const debouncedUpdateSearch = useCallback(debounce(updateSearch, 300), []);

  useEffect(() => {
    debouncedUpdateSearch(search);
  }, [search, debouncedUpdateSearch]);

  return (
    <ul className={'h-full overflow-auto hide-scrollbar'}>
      {locationList?.length === 0 && (
        <li className={'py-4 text-regular-body font-medium text-Gray600'}>검색 결과가 없습니다.</li>
      )}
      {locationList.map((location) => (
        <li
          className={cn(
            'py-4 text-regular-body font-medium transition-colors',
            selectedLocation?.id === location.id ? 'text-BloomingGreen500' : 'text-Gray800',
          )}
          key={`searched-location-list-${location.id}`}
          onClick={() => onSelectLocation(location)}
        >
          {location.name}
        </li>
      ))}
    </ul>
  );
};
