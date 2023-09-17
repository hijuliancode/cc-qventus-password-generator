export function hasConsecutiveCharacters(password: string): boolean {
  if (password.length === 0) {
    // The string is empty, so there are no consecutive characters.
    return false;
  }

  for (let i = 0; i < password.length - 1; i++) {
    const currentChar = password.charCodeAt(i);
    const nextChar = password.charCodeAt(i + 1);

    if (nextChar - currentChar === 1) {
      // Consecutive characters in the ASCII table were found.
      return false;
    }
  }

  // No consecutive characters were found in the ASCII table.
  return true;
}
