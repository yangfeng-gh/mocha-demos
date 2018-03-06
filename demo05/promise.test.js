var fetch = require('node-fetch');
var expect = require('chai').expect;

/**
 * 异步测试
 * Mocha内置对Promise的支持，允许直接返回Promise，等到它的状态改变，再执行断言，而不用显式调用done方法
 */

describe('promise.test.js - 异步测试', function() {
  it('异步请求应该返回一个对象', function() {
    return fetch('https://api.github.com')
      .then(function(res) {
        return res.json();
      }).then(function(json) {
        expect(json).to.be.an('object');
      });
  });
});

