var request = require('superagent');
var expect = require('chai').expect;

/**
 * 异步测试
 * mocha -t 10000 async.test.js
 */
describe('async.test.js - 异步测试', function() {
  it('异步请求应该返回一个对象', function(done){
    request
      .get('https://api.github.com')
      .end(function(err, res){
        expect(res).to.be.an('object');
        done();
      });
  });
});