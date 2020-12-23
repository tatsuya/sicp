/* eslint-disable import/no-extraneous-dependencies */

import 'mocha';
import { expect } from 'chai';

import countChange from './count-change';

describe('Count Change', () => {
  it('computes how many different ways we can make change of a given dollers', () => {
    // [1]
    expect(countChange(1, 5)).to.equal(1);

    // [1, 1]
    expect(countChange(2, 5)).to.equal(1);

    // [1, 1, 1]
    expect(countChange(3, 5)).to.equal(1);

    // [1, 1, 1, 1, 1]
    // [5]
    expect(countChange(5, 5)).to.equal(2);

    expect(countChange(100, 5)).to.equal(292);
  });
});
