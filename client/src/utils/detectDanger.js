// Words that trigger danger mode
const bannedWords = [
  "cocaine",
  "heroin",
  "fentanyl",
  "mdma",
  "meth",
  "opioid",
  "lsd",
  "amphetamine",
  "morphine"
];

// Returns true if input contains a banned word
export function detectDangerWords(value) {
  if (!value) return false;
  const lower = value.toLowerCase();
  return bannedWords.some((w) => lower.includes(w));
}
