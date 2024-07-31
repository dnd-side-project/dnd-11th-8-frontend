import { Meta, StoryObj } from '@storybook/react';
import SegmentControl from './index';

const meta: Meta = {
  title: 'SegmentControl',
  component: SegmentControl,
  render: () => (
    <div className="w-screen h-screen">
      <SegmentControl />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof SegmentControl>;

export const Default: Story = {};
