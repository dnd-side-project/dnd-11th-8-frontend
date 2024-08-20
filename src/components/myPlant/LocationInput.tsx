import trashIcon from '@/assets/icon/trashIcon.svg';
import { useUpdateLocation } from '@/queries/useUpdateLocation';
import { useState } from 'react';

interface LocationInputProps {
  onLocationChange: () => void;
  onDelete: () => void;
  locationName: string;
  locationId: number;
}

const LocationInput: React.FC<LocationInputProps> = ({
  onLocationChange,
  onDelete,
  locationName,
  locationId,
}) => {
  const [inputValue, setInputValue] = useState(locationName);
  const { mutate } = useUpdateLocation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleLocationChange = () => {
    onLocationChange();
    mutate({ locationId, name: inputValue });
  };

  return (
    <div className="flex justify-center flex-col px-[10px] w-full max-w-[365px]">
      <div className="flex justify-center w-full">
        <div className="w-[48px] h-[4px] rounded-[40px] bg-Gray100" />
      </div>
      <label htmlFor="location" className="text-Gray800 text-[13px] font-medium">
        공간명 수정
      </label>
      <div className="relative">
        <input
          id="location"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
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
        onClick={handleLocationChange}
        className="px-[28px] py-[18px] text-white bg-BloomingGreen500 rounded-[16px] my-[10px]"
      >
        변경
      </button>
    </div>
  );
};

export default LocationInput;
