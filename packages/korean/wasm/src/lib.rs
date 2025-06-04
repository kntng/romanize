use wasm_bindgen::prelude::*;

mod error;
mod syllable;
mod tree;

use error::RomanizationError;
use tree::{HANGUL_TREE, UnicodeBlock};

pub fn separate(hangul: &str) -> Result<Vec<char>, RomanizationError> {
  if !HANGUL_TREE.is_str(hangul) {
    return Err(RomanizationError::UnrecognizedLanguage);
  }
  let chars = hangul.chars().fold(vec![], |mut acc, ch| {
    match HANGUL_TREE.search(ch) {
      Some(UnicodeBlock::HangulSyllables) => acc.extend([ch]),
      Some(_) | None => acc.push(ch),
    }
    acc
  });
  Ok(chars)
}
