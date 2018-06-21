export default str => str.replace(/[_.-](\w)/g, (_, x) => x.toUpperCase());
