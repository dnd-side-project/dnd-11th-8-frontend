import { ComponentType } from 'react';
import { withAsyncBoundary } from '@toss/async-boundary';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';
import ErrorPage from '@/pages/ErrorPage.tsx';

export const withDefaultAsyncBoundary = (Component: ComponentType) => {
  return withAsyncBoundary(Component, {
    pendingFallback: <LoadingSpinner />,
    rejectedFallback: ({ error, reset }) => <ErrorPage error={error} reset={reset} />,
  });
};
