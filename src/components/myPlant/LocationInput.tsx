import trashIcon from '@/assets/icon/trashIcon.svg';

interface LocationInputProps {
  onLocationChange: () => void;
  onDelete: () => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ onLocationChange, onDelete }) => (
  <div className="flex flex-col mx-[10px] w-full max-w-[355px]">
    <label htmlFor="location" className="text-Gray800 text-[13px] font-medium">
      공간명 수정
    </label>
    <div className="relative">
      <input
        id="location"
        type="text"
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
      onClick={onLocationChange}
      className="px-[28px] py-[18px] text-white bg-BloomingGreen500 rounded-[16px] my-[10px]"
    >
      변경
    </button>
  </div>
);

export default LocationInput;
