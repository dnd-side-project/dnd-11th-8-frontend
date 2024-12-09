import TrashIcon from '@/assets/icon/bin-line-gray.svg?react';
import IconPlusRoundGray400 from '@/assets/icon/plus-circular-outlined-gray.svg?react';
import { ChangeEvent, useId } from 'react';
import { useHandleImage } from '@/hooks/useHandleImage.ts';
import useToast from '@/hooks/useToast.tsx';

interface MyPlantFeedDeleteOrModifyTooltipProps {
  onDeletePlantFeed: () => void;
  plantId?: number;
  onCompleted?: () => void;
}

const MyPlantFeedDeleteOrModifyTooltip = ({
  onDeletePlantFeed,
  plantId,
  onCompleted,
}: MyPlantFeedDeleteOrModifyTooltipProps) => {
  const imageInputId = useId();

  const { handleImageUpload } = useHandleImage(plantId);
  const { openToast } = useToast();

  const handleAddPlantFeed = async (e: ChangeEvent<HTMLInputElement>) => {
    openToast({
      message: '이미지를 업로드 중입니다.',
    });
    onCompleted?.();
    await handleImageUpload(e);
  };

  const handleDeletePlantFeed = () => {
    onDeletePlantFeed();
    onCompleted?.();
  };

  return (
    <div className="bg-white rounded-[10px] p-2.5 fixed bottom-28 right-8 shadow-Weak-Filter w-[156px]">
      <button
        onClick={handleDeletePlantFeed}
        className="flex w-full flex-row gap-3 items-center active:bg-GrayOpacity100 py-2.5 px-3 rounded-[10px] text-Gray700 font-medium text-small-body"
      >
        <IconPlusRoundGray400 />
        <span>삭제하기</span>
      </button>
      <label
        htmlFor={imageInputId}
        className="flex w-full flex-row gap-2.5 items-center active:bg-GrayOpacity100 p-2.5 rounded-[10px] text-Gray700 font-medium text-small-body"
      >
        <TrashIcon />
        <span>추가하기</span>
      </label>
      <input
        type={'file'}
        accept={'image/*'}
        capture={'environment'}
        className={'hidden'}
        id={imageInputId}
        onChange={handleAddPlantFeed}
      />
    </div>
  );
};

export default MyPlantFeedDeleteOrModifyTooltip;
