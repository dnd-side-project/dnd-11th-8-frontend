import { Meta, StoryObj } from '@storybook/react';
import BottomSheet from '@/components/common/BottomSheet/index.tsx';
import { useState } from 'react';
import { cn } from '@/utils.ts';
import CTAButton from '@/components/common/CTAButton';
import { Button } from '@/components/ui/button.tsx';

const meta: Meta = {
  title: '바텀 시트',
  component: BottomSheet,
};

export default meta;

export type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const max = 50;

    const content = (
      <div>
        {Array.from({ length: max }, (_, i) => i).map((i) => (
          <option
            className={cn(
              'px-[24px] py-[18px] text-center text-regular-body font-medium text-gray-400 cursor-pointer rounded-[10px]',
              selected === i ? 'bg-gray-100' : 'bg-white',
            )}
            onClick={() => setSelected(i)}
            key={`${i}-option`}
          >
            {i + 1}
          </option>
        ))}
      </div>
    );

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>바텀시트 열기</Button>
        <BottomSheet
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={'타이틀은\n두줄까지만 권장합니다'}
          content={content}
          actions={[
            <CTAButton text={'등록하기'} color={'active'} onClick={() => setIsOpen(false)} />,
          ]}
        />
      </>
    );
  },
};
