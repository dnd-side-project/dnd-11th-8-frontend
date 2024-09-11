import { ChangeEventHandler, ReactNode, useEffect, useId, useRef, useState } from 'react';
import Label from '@/components/common/Label';
import { HiXCircle } from 'react-icons/hi';
import { cn } from '@/utils.ts';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  essential?: boolean;
  title?: string;
  placeholder?: string;
  icon?: ReactNode;
  onClear?: () => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  disabled?: boolean;
  description?: string;
  className?: string;
  white?: boolean;
  textColor?: string;
  isError?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  essential = true,
  title,
  icon,
  onClear,
  disabled,
  description,
  className,
  white = false,
  textColor,
  isError,
  ...inputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();

  const handleClear = () => {
    onClear?.();
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
    <div ref={containerRef} className={cn(disabled ? 'z-0' : '', 'grid w-full max-w-sm gap-2')}>
      {title && <Label title={title} essential={essential} htmlFor={id} />}
      <div
        className={`py-[14px] px-[16px] flex flex-row border border-GrayOpacity100 rounded-md bg-Gray50 ${className}`}
      >
        {icon !== undefined ? <div className={'mr-[10px]'}>{icon}</div> : null}
        <input
          id={id}
          type="text"
          {...inputProps}
          className={`${white && 'bg-white'} ${textColor} w-full text-sm text-Gray900 bg-Gray50 focus:outline-none placeholder:text-Gray500 placeholder:text-regular-body placeholder:font-medium`}
          onFocus={() => setIsFocused(true)}
          ref={inputRef}
        />
        {isFocused && inputProps.value && (
          <button type={'button'} onClick={() => handleClear()}>
            <HiXCircle className="w-6 h-6 text-gray-400" />
          </button>
        )}
      </div>
      <p className={`-mt-[3px] text-small-writing ${isError ? 'text-Red500' : 'text-Gray500'}`}>
        {description}
      </p>
    </div>
  );
};

export default TextField;
