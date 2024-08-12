import { setupWorker } from 'msw/browser';
import { handlers } from '@/mocks/handlers.ts';

export const server = setupWorker(...handlers);
