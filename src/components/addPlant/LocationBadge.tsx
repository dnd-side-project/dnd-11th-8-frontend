import Badge from '@/components/common/Badge';
import { cn } from '@/utils.ts';
import { PlantLocation } from '@/types/plantLocation';
import { useLongPress } from 'use-long-press';

interface LocationBadgeProps {
  location: PlantLocation;
  selected: boolean;
  onClick: () => void;
  onLongPress: (defaultValue: string) => void;
}

const LocationBadge = ({ location, selected, onClick, onLongPress }: LocationBadgeProps) => {
  const bind = useLongPress(() => onLongPress(location.name), {});

  return (
    <Badge
      text={location.name}
      onClick={onClick}
      className={cn(selected ? 'bg-BloomingGreen500 text-white' : 'bg-GrayOpacity100 text-Gray800')}
      {...bind()}
    />
  );
};

export default LocationBadge;
