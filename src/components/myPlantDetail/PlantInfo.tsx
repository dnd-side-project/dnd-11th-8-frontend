import { plantInfo } from '@/pages/MyPlantDetail.tsx';
import Badge from '../common/Badge';
import BookOpen from '@/assets/icon/book-open-green.svg?react';
import MapPin from '@/assets/icon/location-green.svg?react';
import useInternalRouter from '@/hooks/useInternalRouter.ts';

interface PlantInfoProps {
  plantInfo: typeof plantInfo;
}

const PlantInfo = ({ plantInfo }: PlantInfoProps) => {
  const router = useInternalRouter();

  return (
    <div className={'mt-5'}>
      <div className={'flex flex-row w-full justify-between items-center'}>
        <div className={'text-small-title font-semibold text-Gray900'}>{plantInfo.nickname}</div>
        <Badge
          text={'가이드북'}
          icon={<BookOpen />}
          className={'bg-Green2-weak text-BloomingGreen500'}
          onClick={() => router.push(`/guide/${plantInfo.plantId}`)}
        />
      </div>
      <div className={'text-small-writing text-Gray600'}>{plantInfo.species}</div>
      <div className={'mt-[20px] flex flex-row gap-[1.5px] items-center'}>
        <MapPin />
        <Badge
          size={'small'}
          text={plantInfo.location}
          className={'bg-Gray50 border-GrayOpacity100 text-Gray800 font-medium'}
        />
      </div>
    </div>
  );
};

export default PlantInfo;
