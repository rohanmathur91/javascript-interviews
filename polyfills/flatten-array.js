function flattenArray(array, depth = 1) {
  const temp = [];
  for (const element of array) {
    if (Array.isArray(element) && depth > 0) {
      temp.push(...flattenArray(element, depth - 1));
    } else {
      temp.push(element);
    }
  }
  return temp;
}
