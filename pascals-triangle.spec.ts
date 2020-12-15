/* eslint-disable import/no-extraneous-dependencies */

import 'mocha';
import { expect } from 'chai';

import p from './pascals-triangle';

describe('Pascal\'s Triangle', () => {
  it('computes numbers in Pascal\'s triangle', () => {
    expect(p(0, 0)).to.equal(1);

    expect(p(1, 0)).to.equal(1);
    expect(p(1, 1)).to.equal(1);

    expect(p(2, 0)).to.equal(1);
    expect(p(2, 1)).to.equal(2);
    expect(p(2, 2)).to.equal(1);

    expect(p(3, 0)).to.equal(1);
    expect(p(3, 1)).to.equal(3);
    expect(p(3, 2)).to.equal(3);
    expect(p(3, 3)).to.equal(1);

    expect(p(4, 0)).to.equal(1);
    expect(p(4, 1)).to.equal(4);
    expect(p(4, 2)).to.equal(6);
    expect(p(4, 3)).to.equal(4);
    expect(p(4, 4)).to.equal(1);
  });
});
