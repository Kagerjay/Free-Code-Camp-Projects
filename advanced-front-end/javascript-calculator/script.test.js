// MOCHA - test

// UI
mocha.setup('bdd')

// CHAI
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

// TESTS
// Assertions
describe("Util.calculatePartials Simple Tests", function(){
	it("should have array of [9,+,9] return [18]", function(){
		let a = util.calculatePartials("+", [9, "+", 9]);
		assert.equal(a,18);
	})
	it("should have array of [9,x,9] return [81]", function(){
		let a = util.calculatePartials("x", [9,"x",9]);
		assert.equal(a,81);
	})
	it("should have array of [9,÷,9] return [1]", function(){
		let a = util.calculatePartials("÷", [9,"÷",9]);
		assert.equal(a,1);
	})
	it("should have array of [9,-,9] return [0]", function(){
		let a = util.calculatePartials("-", [9,"-",9]);
		assert.equal(a,0);
	})
})

describe("Util.SplitNumAndOper Tests", function(){
	it('should have "6+4+3" return [6,"+",4,"+",3]', function(){
		let a = util.splitNumAndOper("6+4+3");
		assert.deepEqual(a,[6,'+',4,'+',3]);
	})
	it('should have "6-4-3" return [6,"+",-4,"+",-3]', function(){
		let a = util.splitNumAndOper("6-4-3");
		assert.deepEqual(a,[6,'+',-4,'+',-3]);
	})
})

// RUN MOCHA
mocha.run()
