import { Meta, StoryObj } from '@storybook/react';
import SearchField from './index';

const meta: Meta = {
  title: 'SearchField',
  component: SearchField,
  render: () => (
    <div className="w-screen h-screen">
      <div className="w-[300px]">
        <SearchField />
      </div>
    </div>
  ),
};

export default meta;

export type story = StoryObj<typeof SearchField>;

export const Default: story = {};
