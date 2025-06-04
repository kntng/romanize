#[derive(Default)]
struct IntervalTreeNode<T: AsRef<str>> {
  start: usize,
  end: usize,
  value: T,
  left: Option<Box<IntervalTreeNode<T>>>,
  right: Option<Box<IntervalTreeNode<T>>>,
}

#[derive(Default)]
pub(crate) struct IntervalTree<T: AsRef<str>> {
  root: Option<Box<IntervalTreeNode<T>>>,
}

impl<T> IntervalTree<T>
where
  T: AsRef<str>,
{
  pub fn new() -> Self {
    Self { root: None }
  }

  pub fn insert(mut self, start: usize, end: usize, value: T) {
    let node = Box::new(IntervalTreeNode {
      start,
      end,
      value,
      left: None,
      right: None,
    });
    if self.root.is_none() {
      self.root = Some(node);
    } else {
      self.root.insert(node);
    }
  }
}

impl<T> IntervalTreeNode<T>
where
  T: AsRef<str>,
{
  fn insert(mut self, node: Box<IntervalTreeNode<T>>) {
    if node.start < self.start {
      match self.left {
        None => self.left = Some(node),
        Some(left) => left.insert(node),
      }
    } else {
      match self.right {
        None => self.right = Some(node),
        Some(right) => right.insert(node),
      }
    }
  }
}

#[derive(Debug, strum::AsRefStr, Clone, Copy, PartialEq, Eq)]
pub enum UnicodeBlock {
  HangulJamo,
  HangulCompatibilityJamo,
  HangulJamoExtendedA,
  HangulJamoExtendedB,
  HangulSyllables,
  CjkSymbolsAndPunctuation,
  BasicLatin,
}

#[derive(Debug)]
pub struct UnicodeInterval {
  pub start: u32,
  pub end: u32,
  pub block: UnicodeBlock,
}

// https://en.wikipedia.org/wiki/Hangul
const HANGUL_INTERVALS: &[UnicodeInterval] = &[
  // https://en.wikipedia.org/wiki/Basic_Latin
  // https://www.unicode.org/charts/PDF/U0000.pdf
  UnicodeInterval {
    start: 0x0000,
    end: 0x007F,
    block: UnicodeBlock::BasicLatin,
  },
  // https://en.wikipedia.org/wiki/Hangul_Jamo
  // https://unicode.org/charts/PDF/U1100.pdf
  UnicodeInterval {
    start: 0x1100,
    end: 0x11FF,
    block: UnicodeBlock::HangulJamo,
  },
  // https://en.wikipedia.org/wiki/CJK_Symbols_and_Punctuation
  // https://www.unicode.org/charts/PDF/U3000.pdf
  UnicodeInterval {
    start: 0x3000,
    end: 0x303F,
    block: UnicodeBlock::CjkSymbolsAndPunctuation,
  },
  // https://en.wikipedia.org/wiki/Hangul_Compatibility_Jamo
  // https://www.unicode.org/charts/PDF/U3130.pdf
  UnicodeInterval {
    start: 0x3130,
    end: 0x318F,
    block: UnicodeBlock::HangulCompatibilityJamo,
  },
  // https://en.wikipedia.org/wiki/Hangul_Jamo_Extended-A
  // https://www.unicode.org/charts/PDF/UA960.pdf
  UnicodeInterval {
    start: 0xA960,
    end: 0xA97F,
    block: UnicodeBlock::HangulJamoExtendedA,
  },
  // https://en.wikipedia.org/wiki/Hangul_Syllables
  // https://www.unicode.org/charts/PDF/UAC00.pdf
  UnicodeInterval {
    start: 0xAC00,
    end: 0xD7A3,
    block: UnicodeBlock::HangulSyllables,
  },
  // https://en.wikipedia.org/wiki/Hangul_Jamo_Extended-B
  // https://www.unicode.org/charts/PDF/UD7B0.pdf
  UnicodeInterval {
    start: 0xD7B0,
    end: 0xD7FF,
    block: UnicodeBlock::HangulJamoExtendedB,
  },
];

pub struct UnicodeTree {
  intervals: &'static [UnicodeInterval],
}

impl UnicodeTree {
  pub const fn new(intervals: &'static [UnicodeInterval]) -> Self {
    UnicodeTree { intervals }
  }

  pub fn is_char(&self, ch: char) -> bool {
    let code = ch as u32;
    self
      .intervals
      .iter()
      .any(|i| i.start <= code && code <= i.end)
  }

  pub fn is_str(&self, s: &str) -> bool {
    s.chars().all(|c| self.is_char(c))
  }

  pub fn search(&self, ch: char) -> Option<UnicodeBlock> {
    let code = ch as u32;
    self
      .intervals
      .iter()
      .find(|i| i.start <= code && code <= i.end)
      .and_then(|i| Some(i.block))
  }
}

pub const HANGUL_TREE: UnicodeTree = UnicodeTree::new(HANGUL_INTERVALS);
