// Return the absolute value of the number x.
const abs = (x: number): number => {
  if (x > 0) {
    return x;
  } if (x === 0) {
    return 0;
  }
  return -x;
};

// Return the average of two numbers, x and y.
const average = (x: number, y: number): number => (x + y) / 2;

// A guess is improved by averaging it with the quotient of the radicand and the old guess.
const improve = (guess: number, x: number): number => average(guess, (x / guess));

// The strategy for implementing isGoodEnough is to watch how guess changes
// from one iteration to the next and to stop when the change is a very small
// fraction of the guess.
const isGoodEnough = (prev: number, current: number): boolean => (
  abs(current - prev) < 0.00000000001
);

// Improve the answer until it is close enough.
const sqrtIter = (guess: number, x: number): number => {
  if (isGoodEnough(improve(guess, x), guess)) {
    return guess;
  }
  return sqrtIter(improve(guess, x), x);
};

const sqrt = (x: number): number => sqrtIter(1, x);

export { sqrt as default };
