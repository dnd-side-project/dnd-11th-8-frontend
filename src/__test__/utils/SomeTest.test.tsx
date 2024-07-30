import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('some test', () => {
  it('should pass', () => {
    render(<h1>some</h1>);
    expect(screen.getByRole('heading')).toHaveTextContent('some');
  });
});
