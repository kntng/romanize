import { expect, test } from 'bun:test';
import { HangulTree } from '../src/lib/is-hangul';

test('isHangulChar', () => {
  const hangul = new HangulTree();
  expect(hangul.isHangulChar('훌')).toBe(true);
  expect(hangul.isHangulChar('쩍')).toBe(true);
  expect(hangul.isHangulChar('커')).toBe(true);
});

test('isHangul', () => {
  const hangul = new HangulTree();
  expect(hangul.isHangul('훌쩍 커버렸어')).toBe(true);
  expect(hangul.isHangul('함께한 기억처럼')).toBe(true);
  expect(hangul.isHangul('널 보는 내 마음은')).toBe(true);
  expect(hangul.isHangul('어느새 여름 지나 가을')).toBe(true);
});
