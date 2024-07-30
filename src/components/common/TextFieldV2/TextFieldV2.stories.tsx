import { Meta, StoryObj } from '@storybook/react';
import TextFieldV2 from '@/components/common/TextFieldV2/index.tsx';

const meta: Meta = {
  title: '텍스트 필드 V2',
  component: TextFieldV2,
};

export default meta;

export type Story = StoryObj<typeof TextFieldV2>;

export const Default: Story = {
  args: {
    label: '레이블',
    placeholder: '플레이스 홀더',
  },
};
