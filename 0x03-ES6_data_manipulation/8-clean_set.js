/*eslint-disable */
export default function cleanSet(set, startString) {
  if (startString === '') {
    return;
  }  
  const newString = Array.from(set)
    .filter((val) => val.startsWith(startString))
    .map((val) => val.slice(startString.length));

  return newString.join('-');
}

