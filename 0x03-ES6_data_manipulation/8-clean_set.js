export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const setValues = [];

  for (const element of Array.from(set)) {
    if (element.startsWith(startString)) {
      setValues.push(element.slice(startString.length));
    }
  }

  return setValues.join('-');
}
