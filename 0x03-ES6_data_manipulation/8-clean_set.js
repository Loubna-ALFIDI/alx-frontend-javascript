function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new Error('Invalid input. Expected a Set and a string.');
  }

  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  const restStrings = filteredValues.map((value) => value.substring(startString.length));
  return restStrings.join(' - ');
}

export default cleanSet;
