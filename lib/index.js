'use strict';

module.exports = {
  getType: data => {
    return typeof data;
  },

  isArray: ary => {
    return Array.isArray(ary);
  },

  isBoolean: boolean => {
    return typeof boolean === 'boolean';
  },

  isFunction: fnct => {
    return typeof fnct === 'function';
  },

  isNumber: num => {
    return typeof num === 'number';
  },

  isObject: obj => {
    return typeof obj === 'object';
  },

  isString: str => {
    return typeof str === 'string';
  }
};
