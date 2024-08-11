import Label from '@/components/common/Label';
import { plantLocation } from '@/constants/plantLocation.ts';
import { cn } from '@/utils.ts';
import Badge from '@/components/common/Badge';
import { useState } from 'react';
import { PlantLocation } from '@/types/plantLocation';

const PlantLocationBadgeList = () => {
  const [selectedLocation, setSelectedLocation] = useState<PlantLocation>(plantLocation[0]);

  return (
    <div>
      <Label title={'식물위치'} htmlFor={'plant-location'} essential={true} />
      <ul className={'w-full flex flex-row gap-[9px] mt-[12px]'}>
        {plantLocation.map((location) => (
          <Badge
            text={location.name}
            key={`location-badge-${location.id}`}
            onClick={() => setSelectedLocation(location)}
            className={cn(
              selectedLocation.id === location.id
                ? 'bg-BloomingGreen500 text-white'
                : 'bg-GrayOpacity100 text-Gray800',
            )}
          />
        ))}
        <Badge text={'직접입력'} type={'button'} className={'bg-GrayOpacity100 text-Gray800'} />
      </ul>
    </div>
  );
};

export default PlantLocationBadgeList;
