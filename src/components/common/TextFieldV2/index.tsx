import { Input, InputProps } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { ReactNode, useId } from 'react';
import { cn } from '@/utils.ts';

export interface TextFieldV2Props extends Omit<InputProps, 'id' | 'type' | 'className'> {
  label: string;
  labelClassName?: string;
  inputClassName?: string;
  trailingIcon?: ReactNode;
}

const TextFieldV2 = ({
  label,
  labelClassName,
  inputClassName,
  trailingIcon,
  ...rest
}: TextFieldV2Props) => {
  const id = useId();

  return (
    <div className="grid w-full items-center gap-2.5">
      <Label
        className={cn('text-small-writing text-gray-800 font-medium px-2.5', labelClassName)}
        htmlFor={id}
      >
        {label}
      </Label>
      <div
        className={cn(
          'w-full px-2.5 pt-0 pb-3 flex flex-row justify-between items-center border-b-2 border-gray-100 bg-white',
          inputClassName,
        )}
      >
        <Input
          className={
            'border-none rounded-none p-0 text-regular-title font-semibold placeholder:text-gray-400 focus-visible:ring-transparent focus-visible:ring-offset-0 caret-blue-500 text-gray-800'
          }
          id={id}
          type={'text'}
          {...rest}
        />
        {trailingIcon}
      </div>
    </div>
  );
};

export default TextFieldV2;
