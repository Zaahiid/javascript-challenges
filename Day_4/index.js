// 8. Remove the spaces found in a string

function removeSpaces(str) {
    return str.replace(/\s/g, '');
  }
  
  // Example usage:
  const stringWithSpaces = "This is an example string with spaces";
  console.log('String with spaces:', stringWithSpaces);
  
  const stringWithoutSpaces = removeSpaces(stringWithSpaces);
  console.log('String without spaces:', stringWithoutSpaces);
  