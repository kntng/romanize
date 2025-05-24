import { HangulJamo } from '../../types/hangul'

// https://en.wikipedia.org/wiki/McCune%E2%80%93Reischauer
export const MCCUNE_REISCHAUER: HangulJamo = {
  // https://en.wikipedia.org/wiki/McCune%E2%80%93Reischauer#Consonants
  'ᄀ': {
    base: 'k',
  },
  'ᄁ': {
    base: 'kk',
  },
  'ᄂ': {
    base: 'n',
  },
  'ᄃ': {
    base: 't',
  },
  'ᄄ': {
    base: 'tt',
  },
  'ᄅ': {
    base: 'r',
  },
  'ᄆ': {
    base: 'm',
  },
  'ᄇ': {
    base: 'p',
  },
  'ᄈ': {
    base: 'pp',
  },
  'ᄉ': {
    base: 's',
  },
  'ᄊ': {
    base: 'ss',
  },
  'ᄋ': {
    base: '',
  },
  'ᄌ': {
    base: 'c',
  },
  'ᄍ': {
    base: 'tch',
  },
  'ᄎ': {
    base: 'ch\'',
  },
  'ᄏ': {
    base: 'k\'',
  },
  'ᄐ': {
    base: 't\'',
  },
  'ᄑ': {
    base: 'p\'',
  },
  'ᄒ': {
    base: 'h',
  },
  // https://en.wikipedia.org/wiki/McCune%E2%80%93Reischauer#Vowels
  'ᅡ': {
    base: 'a',
    next: {
      'ᅦ': 'aë' // Will never happen
    }
  },
  'ᅢ': {
    base: 'ae',
  },
  'ᅣ': {
    base: 'ya',
  },
  'ᅤ': {
    base: 'yae',
  },
  'ᅥ': {
    base: 'ŏ',
  },
  'ᅦ': {
    base: 'e',
  },
  'ᅧ': {
    base: 'yŏ',
  },
  'ᅨ': {
    base: 'ye',
  },
  'ᅩ': {
    base: 'o',
    next: {
      'ᅦ': 'oë' // Will never happen
    }
  },
  'ᅪ': {
    base: 'wa',
  },
  'ᅫ': {
    base: 'wae',
  },
  'ᅬ': {
    base: 'oe',
  },
  'ᅭ': {
    base: 'yo',
  },
  'ᅮ': {
    base: 'u',
  },
  'ᅯ': {
    base: 'wŏ',
  },
  'ᅰ': {
    base: 'we',
  },
  'ᅱ': {
    base: 'wi',
  },
  'ᅲ': {
    base: 'yu',
  },
  'ᅳ': {
    base: 'ŭ',
  },
  'ᅴ': {
    base: 'ŭi',
  },
  'ᅵ': {
    base: 'i',
  },
  // https://en.wikipedia.org/wiki/McCune%E2%80%93Reischauer#Consonants
  '': {
    base: '',
  },
  'ᆨ': {
    base: 'k',
    next: {
      'ᄋ': 'g',
      'ᄂ': 'ngn',
      'ᄅ': 'ngn',
      'ᄆ': 'ngm',
    }
  },
  'ᆩ': {
    base: 'k',
    next: {
      'ᄋ': 'kk',
    }
  },
  'ᆪ': {
    base: 'k',
    next: {
      'ᄋ': 'ks',
    }
  },
  'ᆫ': {
    base: 'n',
    'next': {
      'ᄀ': 'n\'g',
      'ᄃ': 'nd',
      'ᄅ': 'nn',
      'ᄇ': 'nb',
      'ᄌ': 'nj',
    }
  },
  'ᆬ': {
    base: 'n',
    next: {
      'ᄋ': 'nj',
    }
  },
  'ᆭ': {
    base: 'n',
    next: {
      'ᄋ': 'nh',
    }
  },
  'ᆮ': {
    base: 't',
    next: {
      'ᄋ': 'd',
      'ᄂ': 'nn',
      'ᄅ': 'nn',
      'ᄆ': 'nm',
      'ᄉ': 'ss',
    }
  },
  'ᆯ': {
    base: 'l',
    next: {
      'ᄋ': 'r',
      'ᄀ': 'lg',
      'ᄂ': 'll',
      'ᄃ': 'ld',
      'ᄅ': 'll',
      'ᄇ': 'lb',
      'ᄌ': 'lj',
    }
  },
  'ᆰ': {
    base: 'k',
    next: {
      'ᄋ': 'lg',
    }
  },
  'ᆱ': {
    base: 'm',
    next: {
      'ᄋ': 'lm',
    }
  },
  'ᆲ': {
    base: 'l',
    next: {
      'ᄋ': 'lb',
    }
  },
  'ᆳ': {
    base: 'l',
    next: {
      'ᄋ': 'ls',
    }
  },
  'ᆴ': {
    base: 'l',
    next: {
      'ᄋ': 't\'',
    }
  },
  'ᆵ': {
    base: 'p',
    next: {
      'ᄋ': 'lp\'',
    }
  },
  'ᆶ': {
    base: 'l',
    next: {
      'ᄋ': 'r',
    }
  },
  'ᆷ': {
    base: 'm',
    next: {
      'ᄀ': 'mg',
      'ᄃ': 'md',
      'ᄅ': 'mn',
      'ᄇ': 'mb',
      'ᄌ': 'mj',
    }
  },
  'ᆸ': {
    base: 'p',
    next: {
      'ᄋ': 'b',
      'ᄂ': 'mn',
      'ᄅ': 'mn',
      'ᄆ': 'mm',
    }
  },
  'ᆹ': {
    base: 'p',
    next: {
      'ᄋ': 'bs',
    }
  },
  'ᆺ': {
    base: 't',
    next: {
      'ᄋ': 'ss',
    }
  },
  'ᆻ': {
    base: 't',
    next: {
      'ᄋ': 'ss',
    }
  },
  'ᆼ': {
    base: 'ng',
    next: {
      'ᄀ': 'ngg',
      'ᄃ': 'ngd',
      'ᄅ': 'ngn',
      'ᄇ': 'ngb',
      'ᄌ': 'ngj',
    }
  },
  'ᆽ': {
    base: 't',
  },
  'ᆾ': {
    base: 't',
  },
  'ᆿ': {
    base: 'k',
  },
  'ᇀ': {
    base: 't',
  },
  'ᇁ': {
    base: 'p',
  },
  'ᇂ': {
    base: '',
  },
}