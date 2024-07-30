export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const viewBuffer = new DataView(buffer);
  const compareation = position >= 0 && position <= length;
  const error = 'Position outside range';
  return compareation ? viewBuffer.setInt8(position, value) : new Error(error);
}
