export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }

  const setValues = [];

  for (const element of set) {
    if (element.startsWith(startString)) {
      setValues.push(element.slice(startString.length));
    }
  }

  return setValues.join('-');
}
