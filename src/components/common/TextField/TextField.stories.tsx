import { Meta, StoryObj } from '@storybook/react';
import TextField from './index';

const meta: Meta = {
  title: 'TextField',
  component: TextField,
  render: () => (
    <div className="w-screen h-screen">
      <TextField />
    </div>
  ),
};

export default meta;

export type story = StoryObj<typeof TextField>;

export const Default: story = {};
