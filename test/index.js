const expect = require('chai').expect;

function add(a, b) {
    return a + b;
}

describe('Testing add function', function () {
    it('Sum of 2 and 3 should be 5', function (done) {
        expect(add(2, 3)).to.equal(5);
        done();
    })
})
