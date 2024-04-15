function hasValuesFromArray(set, values) {
  return values.every((value) => set.has(value));
}

export default hasValuesFromArray;
