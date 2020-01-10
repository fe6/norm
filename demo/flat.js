// 实现 flat 方法
const flat = (arr, depthParams) => {
  const depth = depthParams || 1;
  if (arr == null) {
    return [];
  }

  const O = arr.slice();

  if (depth < 1) {
    return O;
  }

  return O.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return [...pre, ...flat(cur, depth - 1)];
    }
    return [...pre, cur];
  }, []);
};

export default flat;
