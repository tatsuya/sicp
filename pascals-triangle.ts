const p = (row: number, col: number): number => {
  if (col === 0 || col === row) {
    return 1;
  }
  return p(row - 1, col - 1) + p(row - 1, col);
};

export { p as default };
