import {
  MCCUNE_REISCHAUER,
  REVISED_ROMANIZATION_OF_KOREAN,
  YALE,
} from './constants/systems';
import { HangulSyllable } from './lib/decompose-hangul';
import { HangulTree } from './lib/is-hangul';
import type { HangulJamo } from './types/hangul';

const tree = new HangulTree();

function separate(hangul: string): string[] {
  if (!tree.isHangul(hangul)) {
    throw new Error('Not a Hangul string');
  }
  const chars = hangul.split('').reduce((list, char) => {
    const result = tree.search(char.charCodeAt(0));
    const block = result.length === 1 ? result[0].value : null;
    switch (block) {
      case 'HANGUL_SYLLABLES':
        const syllable = new HangulSyllable(char);
        const { initial, medial, final } = syllable;
        if (final !== '') {
          return list.concat([initial, medial, final]);
        }
        return list.concat([initial, medial]);
      case null:
      default:
        return list.concat([char]);
    }
  }, [] as (keyof HangulJamo | string)[]);
  return chars;
}

function convert(chars: string[], system: HangulJamo) {
  let res = '';
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] in system) {
      const c = chars[i] as keyof HangulJamo;
      if (system[c].next && i + 1 < chars.length && chars[i + 1] in system) {
        const nextC = chars[i + 1] as keyof HangulJamo;
        if (nextC in system[c].next) {
          const nextInitial = nextC as keyof HangulJamo;
          res += system[c].next[nextInitial];
          i++;
          continue;
        }
      }
      res += system[c].base;
      continue;
    }
    res += chars[i];
  }
  return res;
}

export enum RomanizationSystem {
  REVISED = 'RR',
  MCCUNE = 'MR',
  YALE = 'YL',
}

export interface RomanizationOptions {
  system: RomanizationSystem;
}

const defaultRomanizationOptions: RomanizationOptions = {
  system: RomanizationSystem.REVISED,
};

export function romanize(
  hangul: string,
  romanizationOptions: RomanizationOptions = defaultRomanizationOptions
): string {
  const chars = separate(hangul);
  switch (romanizationOptions.system) {
    default:
    case RomanizationSystem.REVISED:
      return convert(chars, REVISED_ROMANIZATION_OF_KOREAN);
    case RomanizationSystem.MCCUNE:
      return convert(chars, MCCUNE_REISCHAUER);
    case RomanizationSystem.YALE:
      return convert(chars, YALE);
  }
}
