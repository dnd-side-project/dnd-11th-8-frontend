import { ChangeEvent, useState } from 'react';
import { getFile } from '@/utils/file/getFile.ts';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/libs/firebase.ts';
import { keyStore } from '@/queries/keyStore.ts';
import useToast from '@/hooks/useToast.tsx';
import { useQueryClient } from '@tanstack/react-query';
import { useUploadMyPlantImage } from '@/queries/useUploadMyPlantImage.ts';
import { useDeleteMyPlantFeed } from '@/queries/useDeleteMyPlantFeed.ts';
import imageCompression from 'browser-image-compression';

export const useHandleImage = (plantId?: number) => {
  const [isPending, setIsPending] = useState(false);

  const { openToast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: uploadMyPlantImage } = useUploadMyPlantImage(plantId);
  const { mutate: deleteMyPlantFeed } = useDeleteMyPlantFeed();

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = getFile(e);

    if (!file) {
      return;
    }

    const compressedFile = await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 960,
      useWebWorker: true,
      initialQuality: 0.5,
      fileType: 'image/webp',
    });

    setIsPending(true);
    const storageRef = ref(storage, `images/myPlantImages/${file.name}`);
    const snapshot = await uploadBytes(storageRef, compressedFile);
    const imageUrl = await getDownloadURL(snapshot.ref);
    uploadMyPlantImage(imageUrl, {
      onError: () => {
        setIsPending(false);
        openToast({
          message: '이미지 업로드에 실패했습니다.',
        });
      },
      onSuccess: async () => {
        await queryClient.invalidateQueries(keyStore.myPlant.getDetail(plantId));
        setIsPending(false);
      },
    });
  };

  const handleImagesDelete = (images: number[], callback: () => void) => {
    // TODO: 클라우드에 저장된 이미지 삭제하기
    // TODO: 클라우드 이미지 삭제 실패에 따른 처리 필요 (롤백 등)
    deleteMyPlantFeed(images, {
      onSuccess: async () => {
        await queryClient.invalidateQueries(keyStore.myPlant.getDetail(plantId));
        callback();
        openToast({
          message: '이미지가 삭제되었습니다.',
        });
      },
      onError: () => {
        callback();
        openToast({
          message: '이미지 삭제에 실패했습니다.',
        });
      },
    });
  };

  return { isPending, handleImageUpload, handleImagesDelete };
};
