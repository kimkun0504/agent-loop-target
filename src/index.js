export function hello(...args) {
  if (args.length === 0) return 'hello';
  const name = args[0];
  if (typeof name !== 'string') {
    throw new TypeError(`hello expects a string name, got ${name === null ? 'null' : typeof name}`);
  }
  return `hello, ${name}`;
}
