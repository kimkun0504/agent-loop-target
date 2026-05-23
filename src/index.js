export const hello = (name) => {
  if (name === undefined) return 'hello';
  if (typeof name !== 'string') {
    throw new TypeError(`name must be a string, got ${typeof name}`);
  }
  return `hello, ${name}`;
};
