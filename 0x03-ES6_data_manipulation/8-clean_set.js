export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }

  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
