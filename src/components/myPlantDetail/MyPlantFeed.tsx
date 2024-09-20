import MyPlantFeedSectionHeader from '@/components/myPlantDetail/MyPlantFeedSectionHeader.tsx';
import { MyPlantDetailType } from '@/mocks/mockDatas/myPlantDetail.ts';
import MyPlantFeedImage from '@/components/myPlantDetail/MyPlantFeedImage.tsx';

interface MyPlantFeedProps {
  images: MyPlantDetailType['images'];
  myPlantId: number;
}

const MyPlantFeed = ({ images, myPlantId }: MyPlantFeedProps) => {
  return (
    <div className={'mt-5 flex flex-col gap-4'}>
      <MyPlantFeedSectionHeader myPlantId={myPlantId} />
      <div className="grid grid-cols-2 w-full gap-[7px]">
        {images.slice(0, 4).map((image) => (
          <MyPlantFeedImage
            imageId={image.imageId}
            plantId={myPlantId}
            imageSrc={image.imageUrl}
            favorite={image.favorite}
            key={`MyPlantFeedImage-${image.imageId}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPlantFeed;
