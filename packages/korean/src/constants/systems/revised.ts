import { HangulJamo } from "../../types/hangul"

// https://www.korean.go.kr/front_eng/roman/roman_01.do
// https://en.wikipedia.org/wiki/Revised_Romanization_of_Korean
export const REVISED_ROMANIZATION_OF_KOREAN: HangulJamo = {
	// https://en.wikipedia.org/wiki/Revised_Romanization_of_Korean#Consonant_letters
	'ᄀ': {
		base: 'g',
	},
	'ᄁ': {
		base: 'kk',
	},
	'ᄂ': {
		base: 'n',
	},
	'ᄃ': {
		base: 'd',
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
		base: 'b',
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
		base: 'j',
	},
	'ᄍ': {
		base: 'jj',
	},
	'ᄎ': {
		base: 'ch',
	},
	'ᄏ': {
		base: 'k',
	},
	'ᄐ': {
		base: 't',
	},
	'ᄑ': {
		base: 'p',
	},
	'ᄒ': {
		base: 'h',
	},
	// https://en.wikipedia.org/wiki/Revised_Romanization_of_Korean#Vowel_letters
	'ᅡ': {
		base: 'a',
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
		base: 'eo',
	},
	'ᅦ': {
		base: 'e',
	},
	'ᅧ': {
		base: 'yeo',
	},
	'ᅨ': {
		base: 'ye',
	},
	'ᅩ': {
		base: 'o',
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
		base: 'wo',
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
		base: 'eu',
	},
	'ᅴ': {
		base: 'ui',
	},
	'ᅵ': {
		base: 'i',
	},
	// https://en.wikipedia.org/wiki/Revised_Romanization_of_Korean#Consonant_letters
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
			'ᄒ': 'k', // 'kh,k'
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
			'ᄂ': 'ngn',
			'ᄅ': 'ngn',
			'ᄆ': 'ngm',
			'ᄒ': 'k', // 'kh,k'
		}
	},
	'ᆫ': {
		base: 'n',
		next: {
			'ᄅ': 'll',
		}
	},
	'ᆬ': {
		base: 'n',
		next: {
			'ᄋ': 'nj',
			'ᄂ': 'nn',
			'ᄅ': 'nn',
			'ᄆ': 'nm',
			'ᄒ': 'ch', // 'th,t,ch'
		}
	},
	'ᆭ': {
		base: 'n',
		next: {
			'ᄋ': 'nh',
			'ᄀ': 'nk',
			'ᄂ': 'nn',
			'ᄅ': 'nn',
			'ᄆ': 'nm',
			'ᄇ': 'nb',
			'ᄒ': 'ch', // 'th,t,ch'
		}
	},
	'ᆮ': {
		base: 't',
		next: {
			'ᄋ': 'j', // 'd,j'
			'ᄂ': 'nn',
			'ᄅ': 'nn',
			'ᄆ': 'nm',
			'ᄒ': 'ch', // 'th,t,ch'
		}
	},
	'ᆯ': {
		base: 'l',
		next: {
			'ᄋ': 'r',
		}
	},
	'ᆰ': {
		base: 'l',
		next: {
			'ᄋ': 'lg',
		}
	},
	'ᆱ': {
		base: 'l',
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
			'ᄋ': 'lt',
		}
	},
	'ᆵ': {
		base: 'l',
		next: {
			'ᄋ': 'lp',
		}
	},
	'ᆶ': {
		base: 'l',
		next: {
			'ᄋ': 'lh',
		}
	},
	'ᆷ': {
		base: 'm',
	},
	'ᆸ': {
		base: 'p',
		next: {
			'ᄋ': 'b',
			'ᄂ': 'mn',
			'ᄅ': 'mn',
			'ᄆ': 'mm',
			'ᄒ': 'p', // 'ph,p'
		}
	},
	'ᆹ': {
		base: 'p',
		next: {
			'ᄋ': 'ps',
		}
	},
	'ᆺ': {
		base: 't',
		next: {
			'ᄋ': 's',
			'ᄂ': 'nn',
			'ᄅ': 'nn',
			'ᄆ': 'nm',
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
	},
	'ᆽ': {
		base: 't',
		next: {
			'ᄋ': 'j',
			'ᄂ': 'nn',
			'ᄅ': 'nn',
			'ᄆ': 'nm',
			'ᄒ': 'ch', // 'th,t,ch'
		}
	},
	'ᆾ': {
		base: 't',
		next: {
			'ᄋ': 'ch',
			'ᄂ': 'nn',
			'ᄅ': 'nn',
			'ᄆ': 'nm',
			'ᄒ': 'ch', // 'th,t,ch'
		}
	},
	'ᆿ': {
		base: 'k',
	},
	'ᇀ': {
		base: 't',
		next: {
			'ᄂ': 'nn',
			'ᄅ': 'nn',
			'ᄆ': 'nm',
			'ᄒ': 'ch', // 'th,t,ch'
		}
	},
	'ᇁ': {
		base: 'p',
	},
	'ᇂ': {
		base: 't',
		next: {
			'ᄋ': 'h',
			'ᄀ': 'k',
			'ᄁ': 'kk',
			'ᄂ': 'nn',
			'ᄃ': 't',
			'ᄄ': 'tt',
			'ᄅ': 'nn',
			'ᄆ': 'nm',
			'ᄇ': 'p',
			'ᄈ': 'pp',
			'ᄉ': 's',
			'ᄊ': 'ss',
			'ᄌ': 'ch',
			'ᄍ': 'jj',
			'ᄐ': 't',
			'ᄒ': 'h',
		}
	},
}

