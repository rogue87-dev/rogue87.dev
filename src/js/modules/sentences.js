const sentences = [
  "Hello Stranger",
  "Clickity Clackity",
  "You ain't getting bored of this?",
  "Why not click the other buttons then?",
  "booooring",
  "This button doesn't do anything ya know?",
  "hmmmm",
  "yeah yeah keep pressing",
  "done?",
  "-_-",
  "This isn't funny anymore",
  "keep pressing that and I'll get rid of it!",
];

export function pickSentence(){
  const randNum = Math.round((Math.random() * (sentences.length - 1)));
  return sentences[randNum]
}