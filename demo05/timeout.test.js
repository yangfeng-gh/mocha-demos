var expect = require('chai').expect;

/**
 * 异步测试
 * mocha默认高亮显示超过75ms的测试用例
 * mocha -t 5000 -s 1000 timeout.test.js
 */
describe('timeout.test.js - 超时测试', function() {
  it('测试应该 5000 毫秒后结束', function(done) {
    var x = true;
    var f = function() {
      x = false;
      expect(x).to.be.not.ok;
      done(); //通知Mocha测试结束
    };
    setTimeout(f, 4000);
  });
});


