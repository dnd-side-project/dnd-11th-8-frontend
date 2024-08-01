import { useState, useEffect, useRef } from 'react';
import { Label } from '@/components/ui/label';
import { HiXCircle } from 'react-icons/hi';

interface TextFieldProps {
  essential?: boolean;
  onValueChange?: (value: string) => void;
  title: string;
  placeholder?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  essential = true,
  onValueChange,
  title,
  placeholder = '플레이스홀더',
}) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onValueChange?.(newValue);
  };

  const handleClear = () => {
    setValue('');
    onValueChange?.('');
    inputRef.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="grid w-full max-w-sm gap-2">
      <div className="flex items-center gap-1">
        <Label htmlFor="textField" className="font-medium text-gray-800">
          {title}
        </Label>
        {essential && <span className="text-red-500">*</span>}
      </div>
      <div className="relative">
        <input
          id="textField"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full h-10 px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={inputRef}
        />
        {isFocused && value && (
          <HiXCircle
            onClick={handleClear}
            className="absolute w-6 h-6 text-gray-400 transform -translate-y-1/2 cursor-pointer top-1/2 right-3"
          />
        )}
      </div>
    </div>
  );
};

export default TextField;
