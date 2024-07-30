import { Switch } from '@/components/ui/switch';
import { FormField } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

interface ToggleProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ checked, onCheckedChange }) => {
  const form = useForm();

  return (
    <FormField
      control={form.control}
      name="toggleButton"
      render={({ field }) => {
        const handleCheckedChange = (value: boolean) => {
          if (onCheckedChange) {
            onCheckedChange(value);
          }
          field.onChange(value);
        };
        return <Switch checked={checked} onCheckedChange={handleCheckedChange} />;
      }}
    />
  );
};

export default Toggle;
