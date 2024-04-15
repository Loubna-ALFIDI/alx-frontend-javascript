function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new Error('Invalid input. Expected a Set and a string.');
  }

  return Array.from(set)
    .filter((value) => value && value.startsWith(startString))
    .map((value) => value.replace(startString, ''))
    .join('-');
}

export default cleanSet;
