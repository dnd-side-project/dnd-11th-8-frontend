import CameraIcon from '@/assets/icon/CameraIcon.tsx';
import { useId } from 'react';

interface ImageInputWithListProps {
  images: {
    imageUrl: string;
    favorite: boolean;
    createdDate: string;
  }[];
}

const ImageInputWithList = ({ images }: ImageInputWithListProps) => {
  const cameraInputId = useId();
  return (
    <ul className={'flex flex-row gap-1.5'}>
      <label
        htmlFor={cameraInputId}
        className={
          'bg-Gray50 border border-GrayOpacity100 rounded-[10px] w-16 aspect-square flex items-center justify-center'
        }
      >
        <CameraIcon />
        <input id={cameraInputId} type={'image'} className={'hidden'} />
      </label>
      {images.slice(0, 2).map((image) => (
        <img
          src={image.imageUrl}
          alt={'my plant image list'}
          className={'w-16 aspect-square border border-GrayOpacity100 rounded-[10px]'}
        />
      ))}
      {images.length > 2 && (
        <div className={'w-16 aspect-square relative'}>
          <img
            src={images[2].imageUrl}
            className={'w-16 aspect-square rounded-[10px]'}
            alt={'my plant more image'}
          />
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
            }}
            className={
              'absolute inset-0 flex items-center justify-center text-white text-small-writing font-medium rounded-[10px]'
            }
          >
            + {images.slice(3).length}
          </div>
        </div>
      )}
    </ul>
  );
};

export default ImageInputWithList;
