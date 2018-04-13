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
		const a = model.pushDot("9.99");
		assert.equal(a,"9.99");
	})
	it('should add . if none present', function(){
		const a = model.pushDot("999x9");
		assert.equal(a,"999x9.");
	})
	it('should add zero char before . if blank', function(){
		const a = model.pushDot("");
		assert.equal(a,"0.");
	})
})

describe("model.pushNumber", function(){
	it("should push number as a char", function(){
		const a = model.pushNumber(9, "");
		assert.equal(a,"9");
	})
	it("should not add numbers but concatenate as chars", function(){
		const a = model.pushNumber(9, 9);
		assert.equal(a,"99");
	})
})

describe("model.pushOperator", function(){
	it('should disallow sequential operators', function(){
		const a = model.pushOperator("+","999+555+");
		assert.equal(a,"999+555+");
	})
	it('should disallow operators on empty var', function(){
		const a = model.pushOperator("+","");
		assert.equal(a,"");
	})
})

describe("model.clearAll", function(){
	it("should clear everything", function(){
		assert.equal(
			"",
			model.clearAll("555+555")
		);
	})
})

describe("model.clearEntry", function(){
	it("should delete all if no operators found", function(){
		assert.equal("", model.clearEntry("5555"));
	})
  it("should delete operator if last character", function(){
		assert.equal("555",model.clearEntry("555+"));
	})
	it("should delete number-string before an operator",function(){
		assert.equal("555+",model.clearEntry("555+444"));
	})
})

describe("model.calculate", function(){
	it("should do order of operations", function(){
		// assert.equal("5+5",model.calculate("5+5=10"));
	})
	it('should throw an error on infinite loop', function(){
		// assert.equal(a,b);
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
