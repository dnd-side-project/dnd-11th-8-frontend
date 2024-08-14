import { describe, expect, it } from 'vitest';
import { isFalsy } from '@/utils/validation/isFalsy.ts';

describe('validation test: ', () => {
  describe('function isFalsy test: ', () => {
    it('should return false when input is not falsy', () => {
      expect(isFalsy(1)).toBe(false);
      expect(isFalsy('string')).toBe(false);
      expect(isFalsy({})).toBe(false);
      expect(isFalsy([])).toBe(false);
      expect(isFalsy(true)).toBe(false);
    });
    it('should return true when input is falsy', () => {
      expect(isFalsy(0)).toBe(true);
      expect(isFalsy('')).toBe(true);
      expect(isFalsy(null)).toBe(true);
      expect(isFalsy(undefined)).toBe(true);
      expect(isFalsy(false)).toBe(true);
    });
  });
});
