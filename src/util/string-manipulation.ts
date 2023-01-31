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
    case "db":
      return "database";
    case "aws":
      return "Amazon Web Service";
    case "azure":
      return "Microsoft Azure";
    case "gcp":
      return "Google Cloud platform";
    case "web dev":
      return "web development";
    case "Node":
      return "Node.js";
    case "vr":
      return "Virtual Reality";
    default:
      return word;
  }
}
