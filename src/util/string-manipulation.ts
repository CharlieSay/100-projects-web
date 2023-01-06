export function capitalizeWords(arr: string[]): string[] {
  return arr.map((element) => {
    let trimmedElement = element.trim();
    return (
      trimmedElement.charAt(0).toUpperCase() +
      trimmedElement.slice(1).toLowerCase()
    );
  });
}

export function getSynonym(word: string): string {
  switch (word) {
    case "js":
      return "javascript";
    case "cascading style sheets":
      return "css";
    case "ts":
      return "typescript";
    // add more cases as needed
    default:
      return word;
  }
}
