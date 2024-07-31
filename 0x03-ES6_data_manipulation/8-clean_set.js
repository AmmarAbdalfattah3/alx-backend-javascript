export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }

  const setValues = [];

  for (const element of set) {
    if (element.startWith(startString)) {
      setValues.push(element.slice(startString));
    }
  }

  return setValues.join('-');
}
