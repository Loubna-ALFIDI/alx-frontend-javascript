function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const array = new ArrayBuffer(length);
  const view = new Int8Array(array);
  view[position] = value;

  return array;
}

export default createInt8TypedArray;
