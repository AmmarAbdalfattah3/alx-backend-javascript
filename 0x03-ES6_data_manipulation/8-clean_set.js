export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }

  const setValues = [];
  const newArray = Array.from(set);
  for (const element of newArray) {
    if (element.startWith(startString)) {
      setValues.push(element.slice(startString.length));
    }
  }

  return setValues.join('-');
}
