import trashIcon from '@/assets/icon/trashIcon.svg';
import { useState } from 'react';

interface LocationInputProps {
  onLocationChange: () => void;
  onDelete: () => void;
  locationName: string;
}

const LocationInput: React.FC<LocationInputProps> = ({
  onLocationChange,
  onDelete,
  locationName,
}) => {
  const [inputValue, setInputValue] = useState(locationName);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleLocationChange = () => {
    // 입력값을 상태로 유지하고 onLocationChange 호출
    onLocationChange();
  };

  return (
    <div className="flex flex-col mx-[10px] w-full max-w-[355px]">
      <label htmlFor="location" className="text-Gray800 text-[13px] font-medium">
        공간명 수정
      </label>
      <div className="relative">
        <input
          id="location"
          type="text"
          value={inputValue} // 상태로 관리되는 입력값
          onChange={handleInputChange} // 입력값 변경 시 상태 업데이트
          className="w-full p-2 pr-10 mb-4 border-b-2 border-Gray100 focus:outline-none text-[24px] text-Gray800 font-semibold"
        />
        <img
          src={trashIcon}
          alt="삭제 아이콘"
          className="absolute cursor-pointer right-3 top-3"
          onClick={onDelete}
        />
      </div>
      <button
        onClick={handleLocationChange} // 인수 없는 onLocationChange 호출
        className="px-[28px] py-[18px] text-white bg-BloomingGreen500 rounded-[16px] my-[10px]"
      >
        변경
      </button>
    </div>
  );
};

export default LocationInput;
