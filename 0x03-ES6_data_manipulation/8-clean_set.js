function cleanSet(set, startString) {
  if (!set || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.replace(startString, ''))
    .join('-');
}

export default cleanSet;
