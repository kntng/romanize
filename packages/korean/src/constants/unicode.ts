// https://en.wikipedia.org/wiki/Hangul
export const HANGUL_BLOCKS: Record<
  HangulBlock,
  { start: number; end: number }
> = {
  // https://en.wikipedia.org/wiki/Hangul_Jamo
  // https://unicode.org/charts/PDF/U1100.pdf
  HANGUL_JAMO: {
    start: 0x1100,
    end: 0x11ff,
  },
  // https://en.wikipedia.org/wiki/Hangul_Compatibility_Jamo
  // https://www.unicode.org/charts/PDF/U3130.pdf
  HANGUL_COMPATIBILITY_JAMO: {
    start: 0x3130,
    end: 0x318f,
  },
  // https://en.wikipedia.org/wiki/Hangul_Jamo_Extended-A
  // https://www.unicode.org/charts/PDF/UA960.pdf
  HANGUL_JAMO_EXTENDED_A: {
    start: 0xa960,
    end: 0xa97f,
  },
  // https://en.wikipedia.org/wiki/Hangul_Jamo_Extended-B
  // https://www.unicode.org/charts/PDF/UD7B0.pdf
  HANGUL_JAMO_EXTENDED_B: {
    start: 0xd7b0,
    end: 0xd7ff,
  },
  // https://en.wikipedia.org/wiki/Hangul_Syllables
  // https://www.unicode.org/charts/PDF/UAC00.pdf
  HANGUL_SYLLABLES: {
    start: 0xac00,
    end: 0xd7af,
  },
  // https://en.wikipedia.org/wiki/CJK_Symbols_and_Punctuation
  // https://www.unicode.org/charts/PDF/U3000.pdf
  CJK_SYMBOLS_AND_PUNCTUATION: {
    start: 0x3000,
    end: 0x303f,
  },
  // https://en.wikipedia.org/wiki/Basic_Latin
  // https://www.unicode.org/charts/PDF/U0000.pdf
  BASIC_LATIN: {
    start: 0x0000,
    end: 0x007f,
  },
};

export type HangulBlock =
  | 'HANGUL_JAMO'
  | 'HANGUL_COMPATIBILITY_JAMO'
  | 'HANGUL_JAMO_EXTENDED_A'
  | 'HANGUL_JAMO_EXTENDED_B'
  | 'HANGUL_SYLLABLES'
  | 'CJK_SYMBOLS_AND_PUNCTUATION'
  | 'BASIC_LATIN';
