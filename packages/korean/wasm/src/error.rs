#[derive(Debug, thiserror::Error)]
pub enum RomanizationError {
  #[error("Language is not recognized")]
  UnrecognizedLanguage,
}

#[derive(Debug, thiserror::Error)]
pub enum UnicodeError {
  #[error("Character is not in unicode blocks for this character type")]
  InvalidBlock,
}
