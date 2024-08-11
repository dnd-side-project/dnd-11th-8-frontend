import { Label as PrimitiveLabel } from '@/components/ui/label.tsx';

interface LabelProps {
  title: string;
  essential?: boolean;
  htmlFor: string;
}

const Label = ({ title, essential, htmlFor }: LabelProps) => {
  return (
    <div className="flex items-center gap-1">
      <PrimitiveLabel htmlFor={htmlFor} className="font-medium text-gray-800 text-small-writing">
        {title}
      </PrimitiveLabel>
      {essential && <span className="text-red-500">*</span>}
    </div>
  );
};
export default Label;
