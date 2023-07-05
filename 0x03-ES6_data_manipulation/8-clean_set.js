/*eslint-disable */
function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }  
  const newString = Array.from(set)
    .filter((val) => val.startsWith(startString))
    .map((val) => val.slice(startString.length));

  return newString.join('-');
}

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
