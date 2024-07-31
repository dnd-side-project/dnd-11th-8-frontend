import { Meta, StoryObj } from '@storybook/react';
import SegmentControl from './index';

const segments = [
  {
    id: 1,
    name: '베란다',
  },
  {
    id: 2,
    name: '거실',
  },
  {
    id: 3,
    name: '루밍이방',
  },
  {
    id: 4,
    name: '부엌',
  },
];

const meta: Meta = {
  title: 'SegmentControl',
  component: SegmentControl,
  render: () => (
    <div className="w-screen h-screen">
      <SegmentControl segments={segments} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof SegmentControl>;

export const Default: Story = {};
