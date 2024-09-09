import { useState } from 'react';
import plusBtn from '@/assets/icon/myPlantPlusBtn.svg';
import OptionsMenu from './OptionsMenu';
import BottomSheet from './BottomSheet';
import LocationInput from '@/components/myPlant/LocationInput.tsx';
import DeleteConfirmation from '@/components/myPlant/DeleteConfirmation.tsx';

interface PlusButtonProps {
  locationName: string;
  locationId: number;
}

const PlusButton: React.FC<PlusButtonProps> = ({ locationName, locationId }) => {
  const [isOptionsVisible, setIsOptionVisible] = useState(false);
  const [isSelectBottomSheetVisible, setSelectBottomSheetVisible] = useState(false);
  const [isEditLocationModalVisible, setEditLocationModalVisible] = useState(false);
  const [isDeleteConfirmationVisible, setDeleteConfirmationVisible] = useState(false);

  const handeSettingLocationClick = () => {
    setSelectBottomSheetVisible(true);
    setIsOptionVisible(false);
  };

  const openEditLocationModal = () => {
    setEditLocationModalVisible(true);
    setSelectBottomSheetVisible(false);
  };

  const openDeleteConfirmation = () => {
    setDeleteConfirmationVisible(true);
    setSelectBottomSheetVisible(false);
  };

  const closeEditLocationModal = () => {
    setEditLocationModalVisible(false);
  };

  const closeDeleteConfirmation = () => {
    setDeleteConfirmationVisible(false);
  };

  return (
    <div className="relative flex justify-end">
      <div className="fixed z-40 bottom-12">
        <button onClick={() => setIsOptionVisible(true)}>
          <img src={plusBtn} alt="플러스 버튼" />
        </button>
      </div>

      {isOptionsVisible && (
        <OptionsMenu
          onSettingLocationClick={handeSettingLocationClick}
          onClose={() => setIsOptionVisible(false)}
          locationName={locationName}
          locationId={locationId}
        />
      )}

      {isSelectBottomSheetVisible && (
        <BottomSheet
          onEditButtonClick={openEditLocationModal}
          onDeleteButtonClick={openDeleteConfirmation}
          onCancel={() => setSelectBottomSheetVisible(false)}
        />
      )}

      <LocationInput
        onLocationChange={closeEditLocationModal}
        locationName={locationName}
        locationId={locationId}
        isOpen={isEditLocationModalVisible}
        onOpenChange={setEditLocationModalVisible}
      />

      <DeleteConfirmation
        locationId={locationId}
        onClose={closeDeleteConfirmation}
        isOpen={isDeleteConfirmationVisible}
        onOpenChange={setDeleteConfirmationVisible}
        onDelete={closeDeleteConfirmation}
      />
    </div>
  );
};

export default PlusButton;
