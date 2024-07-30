import { Input, InputProps } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { useId } from 'react';
import { cn } from '@/utils.ts';

export interface TextFieldV2Props extends Omit<InputProps, 'id' | 'type' | 'className'> {
  label: string;
  labelClassName?: string;
  inputClassName?: string;
}

const TextFieldV2 = ({ label, labelClassName, inputClassName, ...rest }: TextFieldV2Props) => {
  const id = useId();

  return (
    <div className="grid w-full items-center gap-2.5">
      <Label
        className={cn('text-small-writing text-gray-800 font-medium px-2.5', labelClassName)}
        htmlFor={id}
      >
        {label}
      </Label>
      <Input
        className={cn(
          'rounded-none px-2.5 pt-0 pb-3 text-regular-title font-semibold placeholder:text-gray-400 focus-visible:ring-transparent caret-blue-500 border-r-0 border-l-0 border-t-0 border-b-2 border-gray-100 text-gray-800',
          inputClassName,
        )}
        id={id}
        type={'text'}
        {...rest}
      />
    </div>
  );
};

export default TextFieldV2;
