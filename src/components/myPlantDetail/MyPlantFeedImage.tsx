import FeedFavoriteIcon from '@/assets/icon/FeedFavoriteIcon.tsx';
import { useUpdateMyPlantFeed } from '@/queries/useUpdateMyPlantFeed.ts';
import CheckBox from '@/assets/icon/square-checkbox.svg?react';
import { motion, useIsPresent } from 'framer-motion';
import { cn } from '@/utils.ts';

interface MyPlantFeedImageProps {
  imageSrc: string;
  favorite: boolean;
  imageId: number;
  plantId: number;
  onFavoriteClick?: (favorite: boolean) => void;
  showCreatedDate?: boolean;
  createdAt?: string;
  deleteMode?: boolean;
  isSelectForDelete?: boolean;
  onSelectForDelete?: (imageId: number) => void;
}

const MyPlantFeedImage = ({
  imageSrc,
  favorite,
  showCreatedDate = false,
  createdAt,
  imageId,
  plantId,
  deleteMode,
  isSelectForDelete,
  onSelectForDelete,
}: MyPlantFeedImageProps) => {
  const { mutate: updateFeedFavorite } = useUpdateMyPlantFeed();

  const isPresent = useIsPresent();
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: 'spring', stiffness: 500, damping: 40 },
  };

  const handleFavoriteClick = () => {
    updateFeedFavorite({
      favorite: !favorite,
      imageId,
      plantId,
    });
  };

  const handleImageClick = () => {
    if (deleteMode) {
      onSelectForDelete?.(imageId);
    }
  };

  return (
    <motion.div
      {...animations}
      layout
      className={cn(
        'relative rounded-[10px] overflow-hidden bg-Gray100',
        isPresent ? 'static' : 'absolute',
      )}
      onClick={handleImageClick}
    >
      {deleteMode && isSelectForDelete && (
        <div className="absolute top-2 left-2 z-40">
          <CheckBox />
        </div>
      )}
      <img src={imageSrc} alt="식물 이미지" className="w-full aspect-square object-cover" />
      <button onClick={handleFavoriteClick} className="absolute z-40 top-2 right-2">
        <FeedFavoriteIcon isFavorite={favorite} />
      </button>
      {showCreatedDate && (
        <div className="absolute bottom-0 w-full py-2.5 text-white text-center bg-GrayOpacity500 bg-opacity-50 text-small-writing font-medium">
          {createdAt}
        </div>
      )}
    </motion.div>
  );
};

export default MyPlantFeedImage;
