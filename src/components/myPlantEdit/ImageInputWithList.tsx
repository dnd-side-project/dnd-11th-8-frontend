import { useId } from 'react';
import CameraIcon from '@/assets/icon/CameraIcon.tsx';
import { parseIdParams } from '@/utils/params/parseIdParams.ts';
import { useHandleImage } from '@/hooks/useHandleImage.ts';

interface ImageInputWithListProps {
  images: {
    imageUrl: string;
    favorite: boolean;
    createdDate: string;
  }[];
  plantId?: string;
}

const ImageInputWithList = ({ images, plantId }: ImageInputWithListProps) => {
  const cameraInputId = useId();

  const { isPending, handleImageUpload } = useHandleImage(parseIdParams(plantId));

  return (
    <ul className={'flex flex-row gap-1.5 flex-wrap'}>
      <label
        htmlFor={cameraInputId}
        className={
          'bg-Gray50 border border-GrayOpacity100 rounded-[10px] w-16 aspect-square flex items-center justify-center'
        }
      >
        <CameraIcon />
        <input
          id={cameraInputId}
          type={'file'}
          accept={'image/*'}
          capture={'environment'}
          className={'hidden'}
          onChange={handleImageUpload}
        />
      </label>
      {isPending && (
        <div
          className={
            'w-16 aspect-square border border-GrayOpacity100 rounded-[10px] bg-Gray50 flex items-center justify-center'
          }
        >
          <div role="status" className="flex">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-BloomingGreen500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
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
