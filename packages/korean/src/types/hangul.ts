// See https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_syllables_block
// for list of all Unicode characters for initials, medials, and finals in Hangul
export interface HangulInitials {
  ᄀ: HangulChar;
  ᄁ: HangulChar;
  ᄂ: HangulChar;
  ᄃ: HangulChar;
  ᄄ: HangulChar;
  ᄅ: HangulChar;
  ᄆ: HangulChar;
  ᄇ: HangulChar;
  ᄈ: HangulChar;
  ᄉ: HangulChar;
  ᄊ: HangulChar;
  ᄋ: HangulChar;
  ᄌ: HangulChar;
  ᄍ: HangulChar;
  ᄎ: HangulChar;
  ᄏ: HangulChar;
  ᄐ: HangulChar;
  ᄑ: HangulChar;
  ᄒ: HangulChar;
}

export interface HangulMedials {
  ᅡ: HangulChar;
  ᅢ: HangulChar;
  ᅣ: HangulChar;
  ᅤ: HangulChar;
  ᅥ: HangulChar;
  ᅦ: HangulChar;
  ᅧ: HangulChar;
  ᅨ: HangulChar;
  ᅩ: HangulChar;
  ᅪ: HangulChar;
  ᅫ: HangulChar;
  ᅬ: HangulChar;
  ᅭ: HangulChar;
  ᅮ: HangulChar;
  ᅯ: HangulChar;
  ᅰ: HangulChar;
  ᅱ: HangulChar;
  ᅲ: HangulChar;
  ᅳ: HangulChar;
  ᅴ: HangulChar;
  ᅵ: HangulChar;
}

export interface HangulFinals {
  '': HangulChar;
  ᆨ: HangulChar;
  ᆩ: HangulChar;
  ᆪ: HangulChar;
  ᆫ: HangulChar;
  ᆬ: HangulChar;
  ᆭ: HangulChar;
  ᆮ: HangulChar;
  ᆯ: HangulChar;
  ᆰ: HangulChar;
  ᆱ: HangulChar;
  ᆲ: HangulChar;
  ᆳ: HangulChar;
  ᆴ: HangulChar;
  ᆵ: HangulChar;
  ᆶ: HangulChar;
  ᆷ: HangulChar;
  ᆸ: HangulChar;
  ᆹ: HangulChar;
  ᆺ: HangulChar;
  ᆻ: HangulChar;
  ᆼ: HangulChar;
  ᆽ: HangulChar;
  ᆾ: HangulChar;
  ᆿ: HangulChar;
  ᇀ: HangulChar;
  ᇁ: HangulChar;
  ᇂ: HangulChar;
}

export interface HangulChar {
  base: string;
  next?: Partial<Record<keyof HangulJamo, string>>;
}

export type HangulJamo = HangulInitials & HangulMedials & HangulFinals;

export type Hangul = keyof HangulJamo;
