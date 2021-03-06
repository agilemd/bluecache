/* global  describe, it */
/* eslint-disable no-underscore-dangle, global-require */

const expect = require('chai').expect;

const Bluecache = require('../index');

describe('cache#reset', () => {
  it('clear the underlying cache entirely', () => {
    const cache = new Bluecache();

    const key = 'jaeger';
    const value = 'mark iv';

    return cache(key, value).then(() => cache.reset()).then(() => {
      expect(cache._lrucache.length).to.equal(0);
      expect(cache._lrucache.get(key)).to.equal(undefined);
    });
  });

  it('resolves to null', () => {
    const cache = new Bluecache();

    const key = 'jaeger';
    const value = 'mark iv';

    return cache(key, value).then(() => cache.reset()).then((out) => {
      expect(out).to.equal(null);
    });
  });
});
