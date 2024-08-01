import { IoIosArrowForward } from 'react-icons/io';
import Badge from '@/components/common/Badge';

interface IndexProps {
  image?: string;
  name: string;
  badges?: string[];
  onChange?: () => void;
}

const index: React.FC<IndexProps> = ({ image, name, badges, onChange }) => {
  return (
    <>
      <div
        className="cursor-pointer flex rounded-[10px] max-w-[375px] justify-center items-center h-[88px] px-[24px]"
        onClick={onChange}
      >
        <div className="flex justify-center items-center gap-[16px] h-[56px] py-[16px] ">
          {image && (
            <div className="relative w-[40px] h-[40px] overflow-hidden rounded-full">
              <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          )}

          <div className={`flex flex-col ${badges && 'gap-[10px]'}  justify-center`}>
            <div className="text-small-body ">{name}</div>
            <div className="flex gap-[5px]">
              {badges &&
                badges.map((badge, index) => (
                  <Badge text={badge} key={`${badge}-${index}`} size={'small'} type={'display'} />
                ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center ml-auto">
          <IoIosArrowForward color="#B0B8C1" size={'24px'} />
        </div>
      </div>
    </>
  );
};

export default index;
