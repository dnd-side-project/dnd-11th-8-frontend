import React, { useState } from 'react';
import CTAButton from '@/components/common/CTAButton';
import TextFieldV2 from '@/components/common/TextFieldV2';

import CenterBottomSheet from '@/components/common/CenterBottomSheet';

import { cn } from '@/utils.ts';

interface Segment {
  id: number;
  name: string;
}

interface SegmentControlProps {
  segments: Segment[];
  onSegmentChange?: (selectedSegment: Segment) => void;
}

export const ALL_LOCATION = {
  id: -1,
  name: '전체',
};

export const NO_LOCATION = {
  id: -2,
  name: '위치설정',
};

const SegmentControl: React.FC<SegmentControlProps> = ({ segments, onSegmentChange }) => {
  // 전체 탭을 추가
  const allSegment: Segment = { ...ALL_LOCATION };
  const defaultSegments: Segment[] =
    segments.length === 0 ? [allSegment, NO_LOCATION] : [allSegment, ...segments];

  const [selectedId, setSelectedId] = useState<number>(defaultSegments[0].id);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newLocationName, setNewLocationName] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleSegmentClick = (id: number) => {
    setSelectedId(id);
    const selectedSegment = defaultSegments.find((segment) => segment.id === id);
    if (selectedSegment) {
      if (selectedSegment.id === NO_LOCATION.id) {
        // '위치 설정' 클릭 시
        setIsModalOpen(true);
      }
      if (onSegmentChange) {
        onSegmentChange(selectedSegment);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChangeNewLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNewLocationName(value);
    setIsError(value.length > 4); // 예시 유효성 검사
  };

  const handleAddNewLocation = () => {
    setIsModalOpen(false);
  };

  const getClasses = (length: number) => {
    const padding = length === 4 ? 'px-[25px]' : length >= 5 ? 'px-[15px]' : '';
    const fontSize =
      length === 4
        ? 'text-small-body'
        : length === 5
          ? 'text-small-writing'
          : length === 6
            ? 'text-sub-typo'
            : '';
    return { padding, fontSize };
  };

  const visibleSegments = defaultSegments.slice(0, 6);
  const { padding, fontSize } = getClasses(visibleSegments.length);

  return (
    <div className="px-[48px] pb-[15px]">
      <div className="flex justify-around items-center py-[4px] px-[6px] bg-GrayOpacity100 rounded-[30px] gap-[5px]">
        {visibleSegments.map((segment) => {
          const isSelected = selectedId === segment.id;
          const buttonClasses = `flex-1 min-w-0 rounded-[30px] py-2 font-semibold ${padding} ${fontSize} flex justify-center items-center whitespace-nowrap ${
            isSelected ? 'bg-white shadow-lg' : 'text-[#6B7684]'
          }`;

          return (
            <button
              key={segment.id}
              className={buttonClasses}
              onClick={() => handleSegmentClick(segment.id)}
            >
              {segment.name}
            </button>
          );
        })}
      </div>

      <CenterBottomSheet
        title="식물 위치"
        content={
          <TextFieldV2
            placeholder={'직접입력'}
            onChange={handleChangeNewLocation}
            value={newLocationName}
            error={isError}
            errorMessage={'이름은 최대 네글자까지 입력이 가능해요.'}
          />
        }
        actions={[
          <CTAButton
            text={'등록하기'}
            type={'button'}
            onClick={handleAddNewLocation}
            className={cn(!newLocationName || isError ? 'bg-Gray300' : 'bg-BloomingGreen500')}
            disabled={!newLocationName || isError}
          />,
        ]}
        isOpen={isModalOpen}
        onOpenChange={(value) => {
          if (!value) {
            handleCloseModal();
          }
        }}
        headerAsLabel
      />
    </div>
  );
};

export default SegmentControl;
