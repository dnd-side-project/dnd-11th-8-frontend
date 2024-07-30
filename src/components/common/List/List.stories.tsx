import { Meta, StoryObj } from '@storybook/react';
import ListComponent from './index';

const items = [
  {
    id: 1,
    name: 'Input1',
  },
  {
    id: 2,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhKx2Fwr5Y8BEdj-CjHu5beloCcpqRVg6uJpTK6yH9vtSz_I9o',
    name: 'Input2',
  },
  {
    id: 3,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhKx2Fwr5Y8BEdj-CjHu5beloCcpqRVg6uJpTK6yH9vtSz_I9o',
    name: 'Input3',
    badges: ['뱃지S', '뱃지S', '뱃지S'],
  },
];

const meta: Meta = {
  title: 'ListComponent',
  component: ListComponent,
  render: () => (
    <div className="w-screen h-screen">
      <div className="w-[370px] flex flex-col gap-[10px]">
        {items.map((item) => (
          <ListComponent
            key={item.id}
            image={item.image}
            name={item.name}
            badges={item.badges}
            onChange={() => alert('해당 식물로 페이지 이동 ~')}
          />
        ))}
      </div>
    </div>
  ),
};

export default meta;

export type story = StoryObj<typeof ListComponent>;

export const Default: story = {};
