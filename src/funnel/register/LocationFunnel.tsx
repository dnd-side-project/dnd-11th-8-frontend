import Screen from '@/layouts/Screen.tsx';
import Header from '@/components/common/Header';
import 왼쪽꺽쇠 from '@/assets/icon/왼쪽꺽쇠.tsx';
import HeightBox from '@/components/common/HeightBox';
import RegisterFunnelTitle from '@/components/register/RegisterFunnelTitle.tsx';
import TextField from '@/components/common/TextField';
import CTAButton from '@/components/common/CTAButton';
import { cn } from '@/utils.ts';
import { ChangeEvent, Suspense, useState } from 'react';
import { regions } from '@/mocks/mockDatas/regions.ts';
import { RegionList } from '@/components/register/RegionList.tsx';
import { LuLoader2 } from 'react-icons/lu';

interface LocationFunnelProps {
  toNotificationTimeFunnel: (location: (typeof regions)[number]) => void;
  goBack: () => void;
}

const LocationFunnel = ({ toNotificationTimeFunnel, goBack }: LocationFunnelProps) => {
  const [search, setSearch] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<{
    name: string;
    id: number;
  } | null>(null);

  const onClick = () => {
    if (selectedLocation) {
      toNotificationTimeFunnel(selectedLocation);
    }
  };

  const onSelectLocation = (location: (typeof regions)[number]) => {
    setSelectedLocation(location);
    setSearch(location.name);
  };

  const changeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Screen className={'h-screen w-screen flex flex-col'}>
      <Header
        title={'위치'}
        left={
          <button onClick={() => goBack()}>
            <왼쪽꺽쇠 />
          </button>
        }
        className={'text-regular-body font-semibold text-Gray900'}
      />
      <HeightBox height={53.5} />
      <RegisterFunnelTitle title={'반가워요, 초보 식집사님!\n사용할 닉네임을 입력해주세요'} />
      <HeightBox height={40} />
      <TextField
        value={search}
        description="거주하시는 시와 구 or 군을 입력해주세요."
        placeholder={'ex) 서울시 강남구'}
        onChange={changeSearchHandler}
      />
      <HeightBox height={15.75} />
      <Suspense
        fallback={
          <div className={'mt-[30px] flex items-center justify-center'}>
            <LuLoader2 className={'animate-spin'} />
          </div>
        }
      >
        <RegionList search={search} onSelectLocation={onSelectLocation} />
      </Suspense>
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