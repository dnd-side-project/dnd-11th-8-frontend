import { IoIosArrowForward } from 'react-icons/io';
import Badge from '@/components/common/Badge';
import { ReactNode } from 'react';
import { cn } from '@/utils.ts';

interface IndexProps {
  image?: string;
  name: string;
  badges?: string[];
  onChange?: () => void;
  trailingIcon?: ReactNode;
  padding?: 'small' | 'medium';
}

const index: React.FC<IndexProps> = ({
  image,
  name,
  badges,
  onChange,
  trailingIcon,
  padding = 'small',
}) => {
  return (
    <div
      className={cn(
        'cursor-pointer flex rounded-[10px] max-w-md w-full items-center px-[24px]',
        padding === 'small' ? 'py-[16px]' : 'py-[24px]',
      )}
      onClick={onChange}
    >
      <div className="flex justify-center items-center gap-[16px] h-[56px] py-[16px] ">
        {image && (
          <div className="relative w-[40px] h-[40px] overflow-hidden rounded-full">
            <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        )}

        <div className={`flex flex-col ${badges && 'gap-[10px]'}  justify-center`}>
          <div className="text-regular-body font-medium">{name}</div>
          <div className="flex gap-[5px]">
            {badges &&
              badges.map((badge, index) => (
                <Badge text={badge} key={`${badge}-${index}`} size={'small'} type={'display'} />
              ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center ml-auto">
        {trailingIcon ? trailingIcon : <IoIosArrowForward className="text-[#C4C4C4] text-[24px]" />}
      </div>
    </div>
  );
};

export default index;
