export default (path, value) =>
  Array.isArray(path) &&
  path
    .reverse()
    .reduce((stack, fragment) => ({ [fragment]: stack }), { $set: value });
