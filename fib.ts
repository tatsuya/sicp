const fibIter = (a: number, b: number, count: number): number => {
  if (count === 0) {
    return b;
  }
  return fibIter(a + b, a, count - 1);
};

const fib = (n: number): number => fibIter(1, 0, n);

export { fib as default };
