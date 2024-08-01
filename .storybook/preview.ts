import type { Preview } from '@storybook/react';

import '../src/index.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'figma-light',
      values: [
        { name: 'figma-light', value: '#C3C2C2' },
        { name: 'figma-dark', value: '#333333' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: { defaultViewport: 'mobile2' },
  },
};

export default preview;
