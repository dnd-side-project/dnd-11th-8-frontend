import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ListComponent from './index';

const meta: Meta = {
  title: 'ListComponent',
  component: ListComponent,
  render: () => (
    <div className="w-screen h-screen">
      <ListComponent />
    </div>
  ),
};

export default meta;

export type story = StoryObj<typeof ListComponent>;

export const Default: story = {};
