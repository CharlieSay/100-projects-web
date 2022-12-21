export function capitalizeWords(arr: string[]): string[] {
  return arr.map((element) => {
    let trimmedElement = element.trim();
    return (
      trimmedElement.charAt(0).toUpperCase() +
      trimmedElement.slice(1).toLowerCase()
    );
  });
}
