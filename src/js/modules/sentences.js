const sentences = [
  "Hello Stranger",
  "Clickity Clackity",
  "You ain't getting bored of this?",
  "Why not click the other buttons then?",
  "booooring",
];

export function pickSentence(){
  const randNum = Math.round((Math.random() * (sentences.length - 1)));
  return sentences[randNum]
}