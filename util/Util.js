class Util {
  static pequeño(text, maxLen = 1800) {
    return text.length > maxLen
      ? `${text.substr(
          0,
          maxLen - 3
        )}...\n\n[Click here to see the full letter]`
      : text;
  }
}

module.exports = Util;
