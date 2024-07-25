import { Meta, StoryObj } from '@storybook/react';
import GlobalModalTest from './GlobalModalTest';
import { GlobalModalProvider } from '../providers/GlobalModalProvider';
import { GlobalPortal } from '../providers/GlobalPortal';

const meta: Meta = {
  title: 'GlobalModalTest',
  component: GlobalModalTest,
  render: (args) => (
    <GlobalPortal.Provider>
      <GlobalModalProvider>
        <div className="w-screen h-screen">
          <GlobalModalTest description={''} {...args} />
        </div>
      </GlobalModalProvider>
    </GlobalPortal.Provider>
  ),
};

export default meta;

export type story = StoryObj<typeof GlobalModalTest>;

export const Default: story = {};
