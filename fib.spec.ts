/* eslint-disable import/no-extraneous-dependencies */

import 'mocha';
import { expect } from 'chai';

import fib from './fib';

describe('Fibonacci Numbers', () => {
  it('computes Fibonacci numbers', () => {
    expect(fib(0)).to.equal(0);
    expect(fib(1)).to.equal(1);
    expect(fib(2)).to.equal(1);
    expect(fib(3)).to.equal(2);
    expect(fib(4)).to.equal(3);
    expect(fib(5)).to.equal(5);
  });
});
