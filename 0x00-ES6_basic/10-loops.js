export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (let idx = 0; idx < array.length; idx += 1) {
    result[idx] = appendString + array[idx];
  }
  return result;
}
