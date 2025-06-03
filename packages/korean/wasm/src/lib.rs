use wasm_bindgen::prelude::*;

mod tree;

use tree::HANGUL_TREE;

pub fn separate(hangul: &str) -> Result<Vec<String>, ()> {
  if !HANGUL_TREE.is_char(hangul)  {
    return Err(());
  }
  let chars = hangul.chars();

  Ok(vec![])
}
