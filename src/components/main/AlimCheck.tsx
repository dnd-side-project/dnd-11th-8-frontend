import React, { useState } from 'react';
import waterIcon from '@/assets/icon/water.svg';
import fertilizerIcon from '@/assets/icon/fertilizer.svg';
import sunlightIcon from '@/assets/icon/sunlight.svg';
import checkIcon from '@/assets/icon/beforeCheck.svg';
import afterCheckIcon from '@/assets/icon/afterCheck.svg';

interface CheckItemProps {
  icon: string;
  label: string;
  lastChecked: string;
  checked: boolean;
  onCheck: () => void;
}

const CheckItem: React.FC<CheckItemProps> = ({ icon, label, lastChecked, checked, onCheck }) => {
  return (
    <div className="flex flex-col items-center gap-[4px]">
      <img src={icon} alt={`${label} 아이콘`} className="w-6 h-6" />
      <p className="text-small-writing text-Gray400">{label}</p>
      <button
        onClick={onCheck}
        className={`flex gap-[10px] text-sub-typo w-[67px] h-[23px] items-center justify-center rounded-full transition-all ${checked ? 'bg-green-500 text-white' : 'bg-Gray50 text-Gray500 border border-GrayOpacity100'}`}
      >
        {checked ? (
          <>
            <img src={afterCheckIcon} alt="완료 아이콘" className="w-[10px] h-[10px]" />
            완료
          </>
        ) : (
          <>
            <img src={checkIcon} alt="체크 아이콘" className="w-[10px] h-[10px]" />
            {lastChecked}
          </>
        )}
      </button>
    </div>
  );
};

interface AlimCheckProps {
  water: number;
  fertilizer: number;
  healthy: number;
}

const AlimCheck: React.FC<AlimCheckProps> = ({ water, fertilizer, healthy }) => {
  const [waterChecked, setWaterChecked] = useState(false);
  const [fertilizerChecked, setFertilizerChecked] = useState(false);
  const [sunlightChecked, setSunlightChecked] = useState(false);

  return (
    <div className="p-[20px] bg-white rounded-[10px] shadow-sm">
      <div className="relative flex items-center justify-between">
        <div className="flex-1">
          <CheckItem
            icon={waterIcon}
            label="물주기"
            lastChecked={`${water}일 전`}
            checked={waterChecked}
            onCheck={() => setWaterChecked(true)}
          />
        </div>
        <div className="flex-1 relative before:content-[''] before:absolute before:top-1/3 before:left-0 before:w-[1px] before:h-[25px] before:bg-Gray400 after:content-[''] after:absolute after:top-1/3 after:right-0 after:w-[1px] after:h-[25px] after:bg-Gray400">
          <CheckItem
            icon={fertilizerIcon}
            label="비료"
            lastChecked={`${fertilizer}일 전`}
            checked={fertilizerChecked}
            onCheck={() => setFertilizerChecked(true)}
          />
        </div>
        <div className="flex-1">
          <CheckItem
            icon={sunlightIcon}
            label="건강"
            lastChecked={`${healthy}일 전`}
            checked={sunlightChecked}
            onCheck={() => setSunlightChecked(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default AlimCheck;
