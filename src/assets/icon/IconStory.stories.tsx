// src/stories/Icons.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { ComponentType, createElement } from 'react';

// 아이콘 컴포넌트들을 동적으로 임포트
const modules = import.meta.glob('./*.{svg,tsx}', { eager: true, import: 'default' });

let count = 0;

// 아이콘 목록 생성
const icons = Object.keys(modules).map((filePath) => {
  const nameMatch = filePath.match(/\/([A-Za-z0-9_-]+)\.(svg|tsx)$/);
  const name = nameMatch ? nameMatch[1] : 'Unknown' + count++;
  const component = modules[filePath] as string | ComponentType;
  return { name, component };
});

const AllIcons = ({ width, height }: { width: number; height: number }) => (
  <div className={'flex flex-row flex-wrap gap-1'}>
    {icons.map((icon) => {
      if (typeof icon.component === 'string') {
        return (
          <div
            key={icon.name}
            className={
              'flex flex-col items-center justify-center gap-3 border border-black p-2 whitespace-pre-wrap'
            }
          >
            <img src={icon.component} alt={icon.name} width={width} height={height} />
            <p>{icon.name}</p>
          </div>
        );
      }

      return (
        <div
          key={icon.name}
          className={
            'flex flex-col items-center gap-3 border border-black p-2 justify-center whitespace-pre-wrap'
          }
        >
          {createElement(icon.component)}
          <span>{parseIconName(icon.name)}</span>
        </div>
      );
    })}
  </div>
);

const meta: Meta = {
  title: '아이콘 리스트',
  component: AllIcons,
};

export default meta;

export type Story = StoryObj<typeof AllIcons>;

export const Default: Story = {
  render: () => <AllIcons width={50} height={50} />,
};

function parseIconName(name: string) {
  return name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}
