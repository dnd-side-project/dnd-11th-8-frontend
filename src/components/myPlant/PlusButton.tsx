import { useState, useRef, useEffect } from 'react';
import plusBtn from '@/assets/icon/myPlantPlusBtn.svg';
import Overlay from './Overlay';
import OptionsMenu from './OptionsMenu';
import BottomSheet from './BottomSheet';

interface PlusButtonProps {
  onOptionClick: () => void;
  onCloseOverlay: () => void;
  locationName: string;
  locationId: number;
}

const PlusButton: React.FC<PlusButtonProps> = ({
  onOptionClick,
  onCloseOverlay,
  locationName,
  locationId,
}) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [isLocationInputVisible, setLocationInputVisible] = useState(false);
  const [isDeleteConfirmationVisible, setDeleteConfirmationVisible] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = () => {
    setOptionsVisible((prev) => {
      const newVisibility = !prev;
      if (newVisibility) {
        onOptionClick();
      } else {
        onCloseOverlay();
      }
      return newVisibility;
    });
  };

  const handleLocationClick = () => setBottomSheetVisible(true);
  const handleModifyClick = () => setLocationInputVisible(true);
  const handleDeleteClick = () => setDeleteConfirmationVisible(true);
  const handleCancelClick = () => {
    setBottomSheetVisible(false);
    setLocationInputVisible(false);
    setDeleteConfirmationVisible(false);
  };

  const handleLocationChange = () => {
    setBottomSheetVisible(false);
    setLocationInputVisible(false);
    setDeleteConfirmationVisible(false);
    setOptionsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOptionsVisible(false);
        onCloseOverlay();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onCloseOverlay]);

  return (
    <div className="relative flex justify-end">
      {/* Overlay */}
      {isOptionsVisible && <Overlay onClick={onCloseOverlay} />}

      <div className="fixed z-40 bottom-12">
        <button ref={buttonRef} onClick={handleButtonClick}>
          <img src={plusBtn} alt="플러스 버튼" />
        </button>
      </div>

      {isOptionsVisible && (
        <OptionsMenu
          ref={optionsRef}
          onLocationClick={handleLocationClick}
          locationName={locationName}
          locationId={locationId}
        />
      )}

      {isBottomSheetVisible && (
        <BottomSheet
          isLocationInputVisible={isLocationInputVisible}
          isDeleteConfirmationVisible={isDeleteConfirmationVisible}
          onCancel={handleCancelClick}
          onLocationChange={handleLocationChange}
          onModify={handleModifyClick}
          onDelete={handleDeleteClick}
          locationName={locationName}
          locationId={locationId}
        />
      )}
    </div>
  );
};

export default PlusButton;
