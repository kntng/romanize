use crate::{error::UnicodeError, tree::UnicodeInterval};

/// Represents a Unicode character that can be decomposed into multiple code points
pub trait Decomposable {
  /// Decompose a character into its respective code points
  fn decompose(&self) -> Vec<char>;
}

pub trait UnicodeChar: Sized + From<char> {
  const INTERVALS: &'static [UnicodeInterval];

  fn new(ch: char) -> Result<Self, UnicodeError> {
    let code = ch as u32;
    for int in Self::INTERVALS {
      if int.start <= code && code <= int.end {
        return Ok(Self::from(ch))
      }
    }
    Err(UnicodeError::InvalidBlock)
  }
}

impl<T> TryFrom<char> for T where T: UnicodeChar {
  type Error = UnicodeError ;

  fn try_from(ch: char) -> Result<Self, Self::Error> { Self::new(ch)
  }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct HangulChar(pub char);

impl HangulChar {

  pub const fn new(ch: char) {
    let code = ch as u32;
    if code < 0
  }
}
