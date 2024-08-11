import IconWaterworksMono from '@/assets/icon/icon-waterworks-mono.tsx';
import Toggle from '@/components/common/Toggle';

interface NotificationToggleProps {
  name: string;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

const NotificationToggle = ({ name, ...rest }: NotificationToggleProps) => {
  return (
    <div className={'flex flex-row items-center justify-between py-2'}>
      <div className={'flex flex-row items-center gap-2'}>
        <IconWaterworksMono />
        <label className={'text-regular-body font-semibold text-Gray800'}>{name}</label>
      </div>
      <Toggle {...rest} />
    </div>
  );
};

export default NotificationToggle;
