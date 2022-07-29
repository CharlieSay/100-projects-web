export function capitalizeWords(arr) {
  const sanitisedArray = arr.map(element => {
     let trimmedElement = element.trim()
     return trimmedElement.charAt(0).toUpperCase() + trimmedElement.slice(1).toLowerCase();
  });
  return sanitisedArray;
}
