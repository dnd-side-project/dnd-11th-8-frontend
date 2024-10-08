import { afterEach, beforeEach } from 'vitest';
import { cleanup } from '@testing-library/react';

import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from '@/mocks/handlers.ts';

const server = setupServer(...handlers);

beforeEach(() => {
  server.listen();
});

afterEach(() => {
  cleanup();
});
