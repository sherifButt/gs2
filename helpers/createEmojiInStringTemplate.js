const createEmojiInStringTemplate = (emojiCode) => {
  let emoji = parseInt(emojiCode, 16);

  emoji = String.fromCodePoint(emoji);

  return emoji;
};
export { createEmojiInStringTemplate };
