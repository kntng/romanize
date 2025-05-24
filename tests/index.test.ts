import { expect, test } from 'bun:test';
import { romanize } from '@romanize/korean';

test('romanizeHangul1', () => {
  expect(romanize('훌')).toEqual('hul');
  expect(romanize('버')).toEqual('beo');
  expect(
    romanize(`훌쩍 커버렸어
  함께한 기억처럼
  널 보는 내 마음은
  어느새 여름 지나 가을`)
  ).toEqual(`huljjeok keobeoryeosseo
  hamkkehan gieokcheoreom
  neol boneun nae maeumeun
  eoneusae yeoreum jina gaeul`);
});

const tests = {
  안녕하세요: 'annyeonghaseyo',
  안녕: 'annyeong',
  안녕하십니까: 'annyeonghasimnikka',
  좋고: 'joko',
  놓다: 'nota',
  잡혀: 'japyeo',
  낳지: 'nachi',
  // "학여울": "hangnyeoul",
  // "알약": "allyak",
  // "백마": "baengma",
  // "신문로": "sinmunno",
  // "종로": "jongno",
  // "왕십리": "wangsimni",
  // "별내": "byeollae",
  // "신라": "silla",
  // "막내": "mangnae",
};

test('romanizeHangul2', () => {
  for (const [hangul, romanized] of Object.entries(tests)) {
    expect(romanize(hangul)).toEqual(romanized);
  }
});
