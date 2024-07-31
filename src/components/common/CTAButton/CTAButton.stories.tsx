import { Meta, StoryObj } from '@storybook/react';
import CTAButton from '@/components/common/CTAButton/index.tsx';

const meta: Meta = {
  title: 'CTA 버튼',
  component: CTAButton,
};

export default meta;

export type Story = StoryObj<typeof CTAButton>;

export const Default: Story = {
  args: {
    text: '등록하기',
  },
};
