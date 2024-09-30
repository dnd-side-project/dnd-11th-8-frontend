import { FC } from 'react';
import Sprout from '@/assets/icon/sprout-green.svg?react';
import Location from '@/assets/icon/location-green.svg?react';
import useInternalRouter from '@/hooks/useInternalRouter';
import useToast from '@/hooks/useToast';
import { ALL_LOCATION, NO_LOCATION } from '@/components/common/SegmentControl';
import Overlay from '@/components/myPlant/Overlay.tsx';
import { motion } from 'framer-motion';

interface OptionsMenuProps {
  onSettingLocationClick: () => void;
  locationName: string;
  locationId: number;
  onClose: () => void;
}

const OptionsMenu: FC<OptionsMenuProps> = ({
  onSettingLocationClick,
  locationName,
  locationId,
  onClose,
}) => {
  const { push } = useInternalRouter();
  const { openToast } = useToast();

  const handleSproutClick = () => {
    push('/my-plant/add');
  };

  const handleSettingLocationButtonClick = () => {
    if (locationName === '전체' || locationId === ALL_LOCATION.id) {
      openToast({
        message: '전체라는 공간명은 수정 및 삭제할 수 없습니다.',
        duration: 2000,
        className: 'text-white text-[12px]',
      });
    } else if (locationName === '위치 설정' || locationId === NO_LOCATION.id) {
      openToast({
        message: '위치를 추가하면 위치 설정이라는 공간명은 사라져요.',
        duration: 2000,
        className: 'text-white text-[12px]',
      });
    } else {
      onSettingLocationClick();
    }
  };

  return (
    <motion.div
      className="relative flex justify-end mr-[17px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'tween', duration: 0.1 }}
    >
      <Overlay onClick={onClose} />
      <div className="fixed bottom-[161px] bg-white p-[10px] rounded-[16px] z-40">
        <div className="flex flex-col">
          <button
            className="flex gap-[10px] p-[10px] rounded-[10px] hover:bg-GrayOpacity100"
            onClick={handleSproutClick}
          >
            <Sprout />
            <p>식물 등록하기</p>
          </button>
          <button
            onClick={handleSettingLocationButtonClick}
            className="flex gap-[10px] p-[10px] rounded-[10px] hover:bg-GrayOpacity100"
          >
            <Location />
            <p>위치 설정하기</p>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

OptionsMenu.displayName = 'OptionsMenu';

export default OptionsMenu;
