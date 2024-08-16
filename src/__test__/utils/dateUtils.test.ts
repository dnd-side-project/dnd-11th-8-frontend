import { describe, expect, it } from 'vitest';
import { getEndDayOfMonth } from '@/utils/date/getEndDayOfMonth.ts';

describe('dateUtils', () => {
  describe('getEndDayOfMonth function test', () => {
    it('should return 30 2024-08', () => {
      expect(getEndDayOfMonth(2024, 8)).toBe(31);
    });

    it('should return 31 2024-07', () => {
      expect(getEndDayOfMonth(2024, 7)).toBe(31);
    });

    it('should return 29 2024-02', () => {
      expect(getEndDayOfMonth(2024, 2)).toBe(29);
    });

    it('should return 28 2023-02', () => {
      expect(getEndDayOfMonth(2023, 2)).toBe(28);
    });
  });
});
