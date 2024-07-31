import { Meta, StoryObj } from '@storybook/react';

const Template = () => {
  return (
    <div>
      <p className={'text-extra-large-title font-light'}>폰트 테스트 입니다. Light</p>
      <p className={'text-extra-large-title font-medium'}> 폰트 테스트 입니다. Medium</p>
      <p className={'text-extra-large-title font-semibold'}> 폰트 테스트 입니다. Semi Bold</p>
      <p className={'text-extra-large-title font-bold'}> 폰트 테스트 입니다. Bold</p>
    </div>
  );
};

const meta: Meta = {
  title: '폰트 테스트',
  component: Template,
};

export default meta;

export type Story = StoryObj<typeof Template>;

export const Default: Story = {};
