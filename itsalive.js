var chai = require('chai');
var expect = chai.expect;
// var models = require('./models');
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);



// describe('sum', function() {
//   it ('should add', function() {
//     expect(sum(2, 2,).to.equal(4));
//   });
// });
//

describe('Testing suite capabilities', function () {
  it('confirms basic arithmetic', function () {
    expect(2+2).to.equal(4);
  });
});

// describe('Asynchronous', function() {
//   it('tests asynchronous function', function() {
//     console.log('waiting 1000 miliseconds...'); {
//       setTime(function() {
//           console.log('waiting over')
//       }, 1000);
//   });
// });
//take1
// describe('asynchronous', function() {
//   this.timeout(2000);
//
//   it('should take less than 2000ms', function(done) {
//     setTimeout(done, 1000)
//   });
// });
//hint
it('confirms setTimeout\'s timer accuracy', function (done) {
  var start = new Date();
  setTimeout(function () {
    var duration = new Date() - start;
    expect(duration).to.be.closeTo(1000, 50);
    done();
  }, 1000);
});


describe('spy', function() {
  it('calls forEach for every array element', function(){
    var array = [1, 2, 3];
    // chai.spy.on('bob');

    var bob = function(ele, idx) {
      console.log(ele);
    };
      bob = chai.spy.on(bob)
      array.forEach(bob);
      expect(bob).to.have.been.called(array.length);
  });

});



















//
