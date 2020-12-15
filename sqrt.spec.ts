/* eslint-disable import/no-extraneous-dependencies */

import 'mocha';
import { expect } from 'chai';

import sqrt from './sqrt';

describe('Square Roots', () => {
  it('computes square roots of basic numbers', () => {
    expect(sqrt(2)).to.equal(1.4142135623746899);
    expect(sqrt(3)).to.equal(1.7320508075688772);
    expect(sqrt(4)).to.equal(2.000000000000002);
  });

  it('computes square roots of very small numbers', () => {
    expect(sqrt(0.00000000123)).to.equal(0.00003507135655859831);
  });

  it('computes square roots of very large numbers', () => {
    expect(sqrt(1234567890123)).to.equal(1111111.1061109055);
    expect(sqrt(12345678901234)).to.equal(3513641.8288200637);
  });
});
