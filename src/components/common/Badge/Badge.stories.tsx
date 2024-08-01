import { Meta, StoryObj } from '@storybook/react';
import Badge from '@/components/common/Badge';

const meta: Meta = {
  title: '뱃지',
  component: Badge,
};

export default meta;

export type Story = StoryObj<typeof Badge>;

export const ForDisplay: Story = {
  args: {
    text: '거실',
  },
};

export const ForButton: Story = {
  args: {
    text: '뱃지',
    type: 'button',
  },
};
