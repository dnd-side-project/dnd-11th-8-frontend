import React, { useState } from 'react';

interface Segment {
  id: number;
  name: string;
}

interface SegmentControlProps {
  segments: Segment[];
  onSegmentChange?: (selectedSegment: Segment) => void;
}

const SegmentControl: React.FC<SegmentControlProps> = ({ segments, onSegmentChange }) => {
  // 전체 탭을 추가
  const allSegment: Segment = { id: 0, name: '전체' };
  const augmentedSegments = [allSegment, ...segments];

  const [selectedId, setSelectedId] = useState<number>(augmentedSegments[0].id);

  const handleSegmentClick = (id: number) => {
    setSelectedId(id);
    const selectedSegment = augmentedSegments.find((segment) => segment.id === id);
    if (selectedSegment && onSegmentChange) {
      onSegmentChange(selectedSegment);
    }
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

  const visibleSegments = augmentedSegments.slice(0, 6);
  const { padding, fontSize } = getClasses(visibleSegments.length);

  return (
    <div className="px-[48px] pb-[15px]">
      <div className="flex justify-around items-center py-[4px] px-[6px] bg-GrayOpacity100 rounded-[30px] gap-[5px]">
        {visibleSegments.map((segment) => {
          const isSelected = selectedId === segment.id;
          const buttonClasses = `flex-1 min-w-0 rounded-[30px] py-2 font-semibold	${padding} ${fontSize} flex justify-center items-center whitespace-nowrap ${
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
    </div>
  );
};

export default SegmentControl;
