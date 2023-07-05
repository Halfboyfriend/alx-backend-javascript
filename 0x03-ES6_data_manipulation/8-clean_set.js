/*eslint-disable */
export default function cleanSet(set, startString) {
  const newString = Array.from(set)
    .filter((val) => val.startsWith(startString))
    .map((val) => val.slice(startString.length));

  return newString.join('-');
}
