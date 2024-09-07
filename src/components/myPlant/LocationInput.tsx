import { useUpdateLocation } from '@/queries/useUpdateLocation';
import { useState } from 'react';
import CenterBottomSheet from '@/components/common/CenterBottomSheet';
import TextFieldV2 from '@/components/common/TextFieldV2';
import CTAButton from '@/components/common/CTAButton';

interface LocationInputProps {
  onLocationChange: () => void;
  locationName: string;
  locationId: number;
  onOpenChange: (value: boolean) => void;
  isOpen: boolean;
}

const LocationInput: React.FC<LocationInputProps> = ({
  onLocationChange,
  locationName,
  locationId,
  onOpenChange,
  isOpen,
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

  const isError = inputValue.length > 4;

  return (
    <CenterBottomSheet
      title={'위치명 수정'}
      headerAsLabel={true}
      content={
        <TextFieldV2
          placeholder={'직접입력'}
          onChange={handleInputChange}
          value={inputValue}
          error={isError}
          errorMessage={'이름은 최대 네글자까지 입력이 가능해요.'}
        />
      }
      actions={[
        <CTAButton
          text={'변경'}
          className={'bg-BloomingGreen500 disabled:bg-Gray300'}
          onClick={handleLocationChange}
          disabled={isError}
        />,
      ]}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    />
  );
};

export default LocationInput;
