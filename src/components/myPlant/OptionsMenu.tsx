import { forwardRef } from 'react';
import sprout from '@/assets/icon/sprout.svg';
import location from '@/assets/icon/location.svg';
import useInternalRouter from '@/hooks/useInternalRouter';

interface OptionsMenuProps {
  onLocationClick: () => void;
}

const OptionsMenu = forwardRef<HTMLDivElement, OptionsMenuProps>(({ onLocationClick }, ref) => {
  const { push } = useInternalRouter();

  const handleSproutClick = () => {
    push('/my-plant/add');
  };

  return (
    <div
      ref={ref}
      className="fixed bottom-[171px] right-[16.8px] bg-white p-[10px] rounded-[16px] z-40"
    >
      <div className="flex flex-col">
        <button
          className="flex gap-[10px] p-[10px] rounded-[10px] hover:bg-GrayOpacity100"
          onClick={handleSproutClick}
        >
          <img src={sprout} alt="새싹 아이콘" />
          <p>식물 등록하기</p>
        </button>
        <button
          onClick={onLocationClick}
          className="flex gap-[10px] p-[10px] rounded-[10px] hover:bg-GrayOpacity100"
        >
          <img src={location} alt="위치 아이콘" />
          <p>위치 설정하기</p>
        </button>
      </div>
    </div>
  );
});

OptionsMenu.displayName = 'OptionsMenu';

export default OptionsMenu;
