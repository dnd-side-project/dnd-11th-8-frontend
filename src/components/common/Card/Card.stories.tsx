import { Meta, StoryObj } from '@storybook/react';
import Card from '@/components/common/Card';

const meta: Meta = {
  title: '카드 컴포넌트',
  component: Card.Container,
};

export default meta;

export type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card.Container verticalPaddingSize={'large'}>
      <Card.Content className={'p-0 text-regular-body font-semibold text-center'}>
        텍스트를 입력하세요
      </Card.Content>
    </Card.Container>
  ),
};
