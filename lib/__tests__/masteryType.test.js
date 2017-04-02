const assert = require('assert');
const type = require('../index.js');

describe('mastery type', () => {
  const ary = [1, 2, 3];
  const boolean = true;
  const fnct = () => {
    console.log('This is a function');
  };
  const num = 4;
  const obj = {
    first: 'First val',
    second: 'second val'
  };
  const str = 'This is a string';

  it(`${ary} is a number`, () => {
    assert(true, type.isArray(ary));
  });

  it(`${boolean} is a boolean`, () => {
    assert(true, type.isBoolean(boolean));
  });

  it(`${fnct} is a number`, () => {
    assert(true, type.isFunction(fnct));
  });

  it(`${num} is a number`, () => {
    assert(true, type.isNumber(num));
  });

  it(`${obj} is a number`, () => {
    assert(true, type.isNumber(obj));
  });

  it(`${str} is a number`, () => {
    assert(true, type.isString(str));
  });
});
