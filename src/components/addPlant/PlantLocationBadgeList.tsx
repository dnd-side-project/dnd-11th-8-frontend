import { ChangeEventHandler } from 'react';

import { useUpdateLocation } from '@/queries/useUpdateLocation.ts';
import { useDeleteLocation } from '@/queries/useDeleteLocation.ts';
import { MODE, useLocationModalState } from '@/hooks/addNewPlant/useLocationModalState.ts';
import { useNewLocation } from '@/hooks/addNewPlant/useNewLocation.ts';
import { useEditLocation } from '@/hooks/addNewPlant/useEditLocation.ts';
import { useDeleteLocationModal } from '@/hooks/addNewPlant/useDeleteLocationModal.ts';
import { useAddNewLocation } from '@/queries/useAddNewLocation.ts';
import { useGetAllLocation } from '@/queries/useGetAllLocation.ts';
import useToast from '@/hooks/useToast.tsx';

import CTAButton from '@/components/common/CTAButton';
import TextFieldV2 from '@/components/common/TextFieldV2';
import Label from '@/components/common/Label';
import Badge from '@/components/common/Badge';
import CenterBottomSheet from '@/components/common/CenterBottomSheet';

import BinLineMono from '@/assets/icon/BinLineMono.tsx';
import RoundedGreenChecked from '@/assets/icon/RoundedGreenChecked.tsx';

import LocationBadge from '@/components/addPlant/LocationBadge.tsx';
import { PlantLocation } from '@/types/plantLocation';

import { cn } from '@/utils.ts';
import { isFalsy } from '@/utils/validation/isFalsy.ts';
import IconPlusMono from '@/assets/icon/icon-plus-mono.tsx';

interface PlantLocationBadgeListProps {
  handleChange: (location: PlantLocation) => void;
  selectedLocation?: number | null;
  essential?: boolean;
}

const PlantLocationBadgeList = ({
  handleChange,
  selectedLocation,
  essential = true,
}: PlantLocationBadgeListProps) => {
  const { newLocationName, initializeNewLocation, isError, changeNewLocationName } =
    useNewLocation();
  const { modalState, initializeModalState, openEditModal, openAddModal } = useLocationModalState();
  const { editingLocationId, setEditingLocationId, initializeEditingLocation } = useEditLocation();
  const { deleteLocationId, openDeleteModal, isOpenDeleteModal, closeDeleteModal } =
    useDeleteLocationModal();

  const data = useGetAllLocation();
  const { mutate: addNewLocation } = useAddNewLocation();
  const { mutate: updateLocation } = useUpdateLocation();
  const { mutate: deleteLocation } = useDeleteLocation();
  const { openToast } = useToast();

  const changeNewLocationHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    changeNewLocationName(e.target.value);
  };

  const addNewLocationHandler = () => {
    switch (modalState.mode) {
      case MODE.ADD:
        if (data.data.map((location) => location.name).includes(newLocationName)) {
          openToast({
            message: (
              <p className="text-small-body font-medium text-white">이미 존재하는 위치입니다.</p>
            ),
            duration: 1000,
          });
          initializeModalState();
          initializeNewLocation();
          return;
        }
        addNewLocation(newLocationName, {
          onError: (error) => {
            openToast({
              message: <p className={'text-small-body font-medium text-white'}>{error.message}</p>,
              duration: 1000,
            });
          },
        });
        break;
      case MODE.EDIT:
        updateLocation({ locationId: editingLocationId!, name: newLocationName });
        break;
      default:
        throw Error('에러가 발생했습니다.');
    }

    initializeModalState();
    initializeNewLocation();

    setTimeout(() => {
      openToast({
        message: (
          <div
            className={
              'flex flex-row items-center justify-center w-full gap-2 text-small-body font-medium text-white'
            }
          >
            <RoundedGreenChecked />
            <span>등록 되었습니다.</span>
          </div>
        ),
        duration: 1000,
      });
    }, 100);
  };

  const openAddNewModalHandler = () => {
    openAddModal();
  };

  const closeModalHandler = () => {
    initializeModalState();
    initializeNewLocation();
    initializeEditingLocation();
  };

  const openEditModalHandler = (location: PlantLocation) => {
    openEditModal();
    changeNewLocationName(location.name);
    setEditingLocationId(location.id);
  };

  const openDeleteModalHandler = () => {
    if (!editingLocationId) throw Error('삭제 버튼 클릭시 editingLocationId 를 찾을 수 없습니다.');
    openDeleteModal(editingLocationId);
    initializeModalState();
  };

  const closeDeleteModalHandler = () => {
    closeDeleteModal();
  };

  const deleteLocationHandler = () => {
    if (!deleteLocationId) throw Error('editingLocationId 를 찾을 수 없습니다.');
    deleteLocation(deleteLocationId);
    closeDeleteModalHandler();
    setTimeout(() => {
      openToast({
        message: <p className={'text-small-body font-medium text-white'}>삭제 되었습니다.</p>,
      });
    }, 100);
  };

  return (
    <div>
      <Label title={'식물위치'} htmlFor={'plant-location'} essential={essential} />
      <ul className={'w-full flex flex-row gap-[9px] mt-[12px]'}>
        {data.data.map((location) => (
          <LocationBadge
            key={`location-badge-${location.id}`}
            onClick={() => handleChange(location)}
            selected={selectedLocation === location.id}
            location={location}
            onLongPress={() => openEditModalHandler(location)}
          />
        ))}
        {data.data.length < 3 && (
          <Badge
            text={'직접입력'}
            type={'button'}
            className={'bg-GrayOpacity100 text-Gray800'}
            onClick={openAddNewModalHandler}
            icon={<IconPlusMono />}
            disabled={data.data.length >= 3}
          />
        )}
        <CenterBottomSheet
          title="식물 위치"
          content={
            <div className="px-3.5">
              <TextFieldV2
                placeholder={'직접입력'}
                onChange={changeNewLocationHandler}
                value={newLocationName}
                error={isError}
                errorMessage={'이름은 최대 네글자까지 입력이 가능해요.'}
                trailingIcon={
                  modalState.mode === MODE.EDIT ? (
                    <button onClick={() => openDeleteModalHandler()}>
                      <BinLineMono />
                    </button>
                  ) : undefined
                }
              />
            </div>
          }
          actions={[
            <CTAButton
              text={'등록하기'}
              type={'button'}
              onClick={addNewLocationHandler}
              className={cn(
                isFalsy(newLocationName) || isError ? 'bg-Gray300' : 'bg-BloomingGreen500',
              )}
              disabled={isFalsy(newLocationName) || isError}
            />,
          ]}
          isOpen={modalState.open}
          onOpenChange={closeModalHandler}
          // 바텀 시트 제목 사이즈 조절할 때 사용되는 값입니다. true 일 경우 큰 사이즈, 아닐 경우 작은 사이즈 입니다.
          headerAsLabel
        />
        <CenterBottomSheet
          title={'정말 삭제하시나요?\n삭제 후에는 되돌릴 수 없어요'}
          content={<></>}
          actionDirection={'row'}
          actions={[
            <CTAButton
              text={'취소'}
              type={'button'}
              onClick={closeDeleteModalHandler}
              className={'bg-Gray100 text-Gray800'}
            />,
            <CTAButton
              text={'삭제'}
              type={'button'}
              onClick={() => deleteLocationHandler()}
              className={'bg-Red500'}
            />,
          ]}
          isOpen={isOpenDeleteModal}
          onOpenChange={(value) => {
            if (!value) {
              initializeEditingLocation();
            }
          }}
        />
      </ul>
      {data.data.length >= 3 && (
        <p className="text-small-writing text-Red500 mt-[9.75px]">메뉴 등록은 3개까지 가능해요</p>
      )}
    </div>
  );
};

export default PlantLocationBadgeList;
