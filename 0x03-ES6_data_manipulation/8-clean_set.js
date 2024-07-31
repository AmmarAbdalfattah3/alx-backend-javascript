export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }

  const setValues = [];
  const array = Array.from(set);
  for (const element of array) {
    if (element.startsWith(startString)) {
      setValues.push(element.slice(startString.length));
    }
  }

  return setValues.join('-');
}
