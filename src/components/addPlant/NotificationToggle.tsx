import Toggle from '@/components/common/Toggle';
import Badge from '@/components/common/Badge';
import IconArrowSolidDownMono from '@/assets/icon/icon-arrow-solid-down-mono.tsx';
import BottomSheet from '@/components/common/BottomSheet';
import ScrollPicker from '@/components/common/ScrollPicker';
import { useEffect, useState } from 'react';
import CTAButton from '@/components/common/CTAButton';
import useToast from '@/hooks/useToast.tsx';

interface NotificationToggleProps {
  name: string;
  onCheckedChange?: (checked: boolean) => void;
  checked: boolean;
  period: number | null;
  periodUnit?: '일' | '주';
  bottomSheetTitle?: string;
  valueStart?: number;
  valueEnd?: number;
  onSelect?: (value: number) => void;
  icon: string;
  badgeIndex?: number;
  hasPeriod?: boolean;
}

const NotificationToggle = ({
  name,
  period,
  periodUnit,
  bottomSheetTitle,
  valueStart,
  valueEnd,
  onSelect,
  icon,
  badgeIndex,
  hasPeriod = true,
  ...rest
}: NotificationToggleProps) => {
  const [selected, setSelected] = useState<number>(valueStart ?? 0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { openToast } = useToast();

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (hasPeriod && rest.checked && period === null) {
      setIsOpen(true);
    }
  }, [period, rest.checked]);

  return (
    <div className={'flex flex-row items-center justify-between py-2'}>
      <div className={'flex flex-row items-center gap-2'}>
        <img src={icon} alt={'notification icon'} />
        <label className={'text-regular-body font-semibold text-Gray800'}>{name}</label>
        {hasPeriod && rest.checked && (
          <Badge
            text={period !== null ? `${period}${periodUnit} 간격` : '주기 선택'}
            size={'small'}
            className={'bg-Gray50 border-GrayOpacity100 text-Gray-800'}
            trailingIcon={<IconArrowSolidDownMono />}
            onClick={() => {
              if (!rest.checked) {
                openToast({
                  message: '주기 선택을 하시려면 알림을 허용해 주세요.',
                });
                return;
              }
              setIsOpen(true);
            }}
          />
        )}
      </div>
      <BottomSheet
        title={bottomSheetTitle ?? ''}
        content={
          <div className={'h-[310px] px-[10px]'}>
            <ScrollPicker
              start={valueStart ?? 0}
              end={valueEnd ?? 0}
              selectedClassName={'bg-GrayOpacity100 text-Gray800 rounded-[10px]'}
              onSelect={setSelected}
              selected={selected}
              badge={badgeIndex}
            />
          </div>
        }
        actions={[
          <CTAButton
            onClick={() => {
              onSelect?.(selected);
              onClose();
            }}
            text={'선택하기'}
            className={'bg-BloomingGreen500 text-white'}
          />,
        ]}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Toggle {...rest} />
    </div>
  );
};

export default NotificationToggle;
