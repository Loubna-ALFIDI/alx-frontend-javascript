function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const array = new ArrayBuffer(length);
  const view = new DataView(array);
  view.setInt8(position, value);
  return view;
}

export default createInt8TypedArray;
