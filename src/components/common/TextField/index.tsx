import { useState, useEffect, useRef } from 'react';
import { Label } from '@/components/ui/label';
import { HiXCircle } from 'react-icons/hi';

interface TextFieldProps {
  essential?: boolean;
  onValueChange?: (value: string) => void;
  title: string;
}

const Index: React.FC<TextFieldProps> = ({ essential = true, onValueChange, title }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  const handleClear = () => {
    setValue('');
    if (onValueChange) {
      onValueChange('');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="grid w-full max-w-sm items-center gap-1.5">
      <div className="flex gap-[5px]">
        <Label htmlFor="textField" className="font-medium text-gray-800 text-small-writing">
          {title}
        </Label>
        {essential && <p className="text-[#F04452] flex items-start leading-none">*</p>}
      </div>
      <div className="relative">
        <input
          className="flex h-10 w-full border border-input bg-background px-[16px] py-[14px] text-sm ring-offset-background rounded-[10px] text-gray-900 focus:outline-none focus:ring-0"
          id="textField"
          placeholder="플레이스홀더"
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
        />
        {isFocused && (
          <HiXCircle
            onClick={handleClear}
            className="w-[24px] h-[24px] absolute top-1/2 right-[16px] translate-y-[-50%] fill-[#B0B8C1] cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Index;
