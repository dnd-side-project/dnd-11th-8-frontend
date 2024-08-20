import React, { useState, useEffect } from 'react';
import waterIcon from '@/assets/icon/water.svg';
import fertilizerIcon from '@/assets/icon/fertilizer.svg';
import sunlightIcon from '@/assets/icon/heartAfter.svg';
import beforeWaterIcon from '@/assets/icon/beforeWater.svg';
import beforeFertilizerIcon from '@/assets/icon/beforeFertilizer.svg';
import beforeSunlightIcon from '@/assets/icon/heart.svg';
import checkIcon from '@/assets/icon/beforeCheck.svg';
import afterCheckIcon from '@/assets/icon/afterCheck.svg';
import useToast from '@/hooks/useToast';

interface CheckItemProps {
  icon: string;
  beforeIcon: string;
  label: string;
  lastChecked: string | null;
  checked: boolean;
  onCheck: () => void;
}

const CheckItem: React.FC<CheckItemProps> = ({
  icon,
  beforeIcon,
  label,
  lastChecked,
  checked,
  onCheck,
}) => {
  const currentIcon = checked ? icon : beforeIcon;

  return (
    <div className="flex flex-col items-center gap-[4px]">
      <img
        src={currentIcon}
        alt={`${label} 아이콘`}
        className="w-6 h-6 cursor-pointer"
        onClick={onCheck}
      />
      <p className="text-small-writing text-Gray400">{label}</p>
      <button
        onClick={onCheck}
        className={`flex gap-[10px] text-sub-typo w-[67px] h-[23px] items-center justify-center rounded-full transition-all ${
          checked
            ? 'bg-green-500 text-white'
            : 'bg-Gray50 text-Gray500 border border-GrayOpacity100'
        }`}
      >
        {checked ? (
          <>
            <img src={afterCheckIcon} alt="완료 아이콘" className="w-[10px] h-[10px]" />
            완료
          </>
        ) : (
          <>
            <img src={checkIcon} alt="체크 아이콘" className="w-[10px] h-[10px]" />
            {lastChecked ? `${lastChecked}일 전` : '기록 없음'}
          </>
        )}
      </button>
    </div>
  );
};

interface AlimCheckProps {
  water: number | null;
  fertilizer: number | null;
  sunlight: number | null;
}

const AlimCheck: React.FC<AlimCheckProps> = ({ water, fertilizer, sunlight }) => {
  const { openToast } = useToast();
  const [waterChecked, setWaterChecked] = useState(false);
  const [fertilizerChecked, setFertilizerChecked] = useState(false);
  const [sunlightChecked, setSunlightChecked] = useState(false);

  const messages = [
    '환기는 시켜주셨나요?',
    '식물에 붙은 먼지는 잘 털어 주셨나요?',
    '애정있게 쳐다보셨나요?',
    '잎의 색이 건강해 보이나요?',
    '흙의 상태를 점검하셨나요?',
    '식물이 자라는 방향을 바꿔 주셨나요?',
    '해충이 없는지 확인하셨나요?',
  ];

  const handleSunlightCheck = () => {
    setSunlightChecked(true);

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    openToast({
      message: randomMessage,
      duration: 2000,
      className: 'text-white w-[250px]',
    });
  };

  useEffect(() => {
    if (sunlightChecked) {
      const timer = setTimeout(() => setSunlightChecked(false), 86400000);
      return () => clearTimeout(timer);
    }
  }, [sunlightChecked]);

  return (
    <div className="p-[20px] bg-white rounded-[10px] shadow-sm">
      <div className="relative flex items-center justify-between">
        <div className="flex-1">
          <CheckItem
            icon={waterIcon}
            beforeIcon={beforeWaterIcon}
            label="물주기"
            lastChecked={water !== null ? `${water}` : null}
            checked={waterChecked}
            onCheck={() => setWaterChecked(true)}
          />
        </div>
        <div className="flex-1 relative before:content-[''] before:absolute before:top-1/3 before:left-0 before:w-[1px] before:h-[25px] before:bg-Gray400 after:content-[''] after:absolute after:top-1/3 after:right-0 after:w-[1px] after:h-[25px] after:bg-Gray400">
          <CheckItem
            icon={sunlightIcon}
            beforeIcon={beforeSunlightIcon}
            label="관심주기"
            lastChecked={sunlight !== null ? `${sunlight}` : null}
            checked={sunlightChecked}
            onCheck={handleSunlightCheck}
          />
        </div>
        <div className="flex-1">
          <CheckItem
            icon={fertilizerIcon}
            beforeIcon={beforeFertilizerIcon}
            label="비료"
            lastChecked={fertilizer !== null ? `${fertilizer}` : null}
            checked={fertilizerChecked}
            onCheck={() => setFertilizerChecked(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default AlimCheck;
