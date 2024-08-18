import { forwardRef } from 'react';
import sprout from '@/assets/icon/sprout.svg';
import location from '@/assets/icon/location.svg';
import useInternalRouter from '@/hooks/useInternalRouter';
import useToast from '@/hooks/useToast';

interface OptionsMenuProps {
  onLocationClick: () => void;
  locationName: string;
  locationId: number;
}

const OptionsMenu = forwardRef<HTMLDivElement, OptionsMenuProps>(
  ({ onLocationClick, locationName, locationId }, ref) => {
    const { push } = useInternalRouter();
    const { openToast } = useToast();

    const handleSproutClick = () => {
      push('/my-plant/add');
    };

    const handleLocationClick = () => {
      if (locationName === '전체' || locationId === 0) {
        openToast({
          message: '전체라는 공간명은 수정 및 삭제할 수 없습니다.',
          duration: 1000,
          textColor: 'text-white text-[12px]',
        });
      } else {
        onLocationClick();
      }
    };

    return (
      <div className="relative flex justify-end mr-[17px]">
        <div ref={ref} className="fixed bottom-[161px] bg-white p-[10px] rounded-[16px] z-40">
          <div className="flex flex-col">
            <button
              className="flex gap-[10px] p-[10px] rounded-[10px] hover:bg-GrayOpacity100"
              onClick={handleSproutClick}
            >
              <img src={sprout} alt="새싹 아이콘" />
              <p>식물 등록하기</p>
            </button>
            <button
              onClick={handleLocationClick}
              className="flex gap-[10px] p-[10px] rounded-[10px] hover:bg-GrayOpacity100"
            >
              <img src={location} alt="위치 아이콘" />
              <p>위치 설정하기</p>
            </button>
          </div>
        </div>
      </div>
    );
  },
);

OptionsMenu.displayName = 'OptionsMenu';

export default OptionsMenu;
