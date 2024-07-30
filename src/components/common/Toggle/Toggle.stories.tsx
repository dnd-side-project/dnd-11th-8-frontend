import { Meta, StoryObj } from '@storybook/react';
import ToggleComponent from './index';

const meta: Meta = {
  title: 'ToggleComponent',
  component: ToggleComponent,
  render: () => (
    <div className="w-screen h-screen">
      <ToggleComponent />
    </div>
  ),
};

export default meta;

export type story = StoryObj<typeof ToggleComponent>;

export const Default: story = {};
