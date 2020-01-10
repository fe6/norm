import flat from './flat';

const myArr = [[1], [2, 3], [4, 5], [6, [7, [8, [9, 10]]]]];

describe('flat', () => {
  it('render', (done) => {
    try {
      expect(flat(myArr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      done();
    } catch (err) {
      done.fail(err);
    }
  });

  it('empty array', (done) => {
    try {
      expect(flat(null)).toStrictEqual([]);
      done();
    } catch (err) {
      done.fail(err);
    }
  });

  it('depth', (done) => {
    try {
      expect(flat(myArr, -1)).toStrictEqual(myArr);
      done();
    } catch (err) {
      done.fail(err);
    }
  });
});
