function extractMarkdownMetadata(markdown = ``){
  // The rest of the code will go here
  const metadataMatched = markdown.match(/^---([\s\S]*?)---/gm);
  const metadata = metadataMatched[0];
  
  if (!metadata) {
    return {};
  }
  const metadataLines = metadata.split("\n");
  // yeah yeah I know this looks bad
  metadataLines.splice(0,1)
  metadataLines.pop()

  const metadataObject = metadataLines.reduce((accumulator, line) =>{
    const [key, ...value] = line.split(":").map((part) => part.trim());

    if(key) accumulator[key] = value[1] ? value.join(":") : value.join("");
    return accumulator;
  }, {});
  return metadataObject
}