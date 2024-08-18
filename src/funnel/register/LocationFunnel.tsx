import Screen from '@/layouts/Screen.tsx';
import Header from '@/components/common/Header';
import 왼쪽꺽쇠 from '@/assets/icon/왼쪽꺽쇠.tsx';
import HeightBox from '@/components/common/HeightBox';
import RegisterFunnelTitle from '@/components/register/RegisterFunnelTitle.tsx';
import TextField from '@/components/common/TextField';
import CTAButton from '@/components/common/CTAButton';
import { cn } from '@/utils.ts';
import { useState } from 'react';

interface Location {
  locationId: number;
  name: string;
}

interface LocationFunnelProps {
  toNotificationTimeFunnel: (location: Location) => void;
}

const locationList = [
  { locationId: 1, name: '서울시 강남구' },
  { locationId: 2, name: '서울시 강동구' },
];

const LocationFunnel = ({ toNotificationTimeFunnel }: LocationFunnelProps) => {
  const [location, setLocation] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<{
    name: string;
    locationId: number;
  } | null>(null);

  const onClick = () => {
    if (selectedLocation) {
      toNotificationTimeFunnel(selectedLocation);
    }
  };

  const onSelectLocation = (location: Location) => {
    setSelectedLocation(location);
    setLocation(location.name);
  };

  return (
    <Screen className={'h-screen w-screen flex flex-col'}>
      <Header
        title={'위치'}
        left={
          <button>
            <왼쪽꺽쇠 />
          </button>
        }
        className={'text-regular-body font-semibold text-Gray900'}
      />
      <HeightBox height={53.5} />
      <RegisterFunnelTitle title={'반가워요, 초보 식집사님!\n사용할 닉네임을 입력해주세요'} />
      <HeightBox height={40} />
      <TextField
        value={location}
        description="거주하시는 시와 구 or 군을 입력해주세요."
        placeholder={'ex) 서울시 강남구'}
        onChange={(e) => setLocation(e.target.value)}
      />
      <HeightBox height={15.75} />
      <ul>
        {locationList.map((location) => (
          <li
            className={'py-4 text-regular-body text-Gray800 font-medium'}
            key={`searched-location-list-${location.locationId}`}
            onClick={() => onSelectLocation(location)}
          >
            {location.name}
          </li>
        ))}
      </ul>
      <HeightBox height={'100%'} />
      <CTAButton
        text={'다음'}
        className={cn(selectedLocation === null ? 'bg-Gray300' : 'bg-BloomingGreen500')}
        onClick={onClick}
        disabled={!selectedLocation}
      />
      <HeightBox height={'30px'} />
    </Screen>
  );
};

export default LocationFunnel;
