// MOCHA - test

// UI
mocha.setup('bdd')

// CHAI
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

// TESTS
// Assertions
describe("util.calculatePartials", function(){
	it("should have array of [9,+,9] return [18]", function(){
		const a = util.calculatePartials("+", [9, "+", 9]);
		assert.equal(a,18);
	})
	it("should have array of [9,x,9] return [81]", function(){
		const a = util.calculatePartials("x", [9,"x",9]);
		assert.equal(a,81);
	})
	it("should have array of [9,÷,9] return [1]", function(){
		const a = util.calculatePartials("÷", [9,"÷",9]);
		assert.equal(a,1);
	})
	it("should have array of [9,-,9] return [0]", function(){
		const a = util.calculatePartials("-", [9,"-",9]);
		assert.equal(a,0);
	})
})

describe("util.SplitNumAndOper", function(){
	it('should have "6+4+3" return [6,"+",4,"+",3]', function(){
		const a = util.splitNumAndOper("6+4+3");
		assert.deepEqual(a,[6,'+',4,'+',3]);
	})
	it('should have "6-4-3" return [6,"+",-4,"+",-3]', function(){
		const a = util.splitNumAndOper("6-4-3");
		assert.deepEqual(a,[6,'+',-4,'+',-3]);
	})
})

describe("model.pushDot", function(){
	it('should allow only one "."', function(){
	})
})

describe("model.pushNumber", function(){
	it("should push number as a string/char", function(){
	})
})

describe("model.pushOperator", function(){
	it('should disallow sequential operators', function(){
	})
})

describe("model.clearAll", function(){
	it("should clear everything", function(){
	})
})

describe("model.clearEntry", function(){
	it("should delete all if no operators found", function(){
	})
  it("should delete operator if last character", function(){
	})
	it("should delete number-string before an operator", function(){
	})
})

describe("model.calculate", function(){
	it("should do order of operations", function(){
	})
})

describe("view.display", function(){
	it('should throw "Digit Limit Met" if lastNumSeq > 9 chars', function(){
	})
	it('should throw "Digit Limit Met" if calculation > 9 chars', function(){
	})
	it('should throw "Digit Limit Met" if cache > 26 char', function(){
	})
	it('should show 0 if cache is blank', function(){
	})
})

// RUN MOCHA
mocha.run()
