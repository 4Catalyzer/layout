export default function camelCase(str) {
  return str.replace(/[_.-](\w)/g, (_, x) => x.toUpperCase());
}
