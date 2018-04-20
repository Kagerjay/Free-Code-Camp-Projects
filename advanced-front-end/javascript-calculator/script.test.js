// MOCHA - test

// UI
mocha.setup('bdd')

// CHAI
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

// TESTS
// Assertions


describe('getEqualSignAndNumber', function(){
	it('should do nothing if there is no equal sign', function(){
		assert.equal("555",model.getEqualSignAndNumber("555"));
	})
	it('should grab equal sign and Number if present', function(){
		assert.equal("=10",model.getEqualSignAndNumber("5+5=10"));
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
	it('should do nothing & delete = sign if previous call was calculate', function(){
		assert.equal("0.",model.pushDot("=999"));
	})

})

describe("model.pushNumber", function(){
	it("should push number as a char", function(){
		const a = model.pushNumber(9, "");
		assert.equal(a,"9");
	})
	it("should not add numbers but concatenate as chars", function(){
		const a = model.pushNumber('9', '9');
		assert.equal(a,"99");
	})
	it('should do nothing & delete = sign if previous call was calculate', function(){
		assert.equal("5",model.pushNumber("5","=999"));
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
	it('should behave normally and delete "=" sign if previous call was calc', function(){
		assert.equal("999+",model.pushOperator("+","=999"));
	})
})

describe("model.clearAll", function(){
	it("should clear everything", function(){
		assert.equal("", model.clearAll("555+555"));
	})
})

describe("model.clearEntry", function(){
	it("should delete all if no operators found", function(){
		assert.equal("", model.clearEntry("5555"));
	})
  it("should delete operator if it is last character", function(){
		assert.equal("555",model.clearEntry("555+"));
	})
	it("should delete number token before an operator",function(){
		assert.equal("555+",model.clearEntry("555+444"));
	})
	it('should clear everything if calculate was last operation', function(){
		assert.equal("",model.clearEntry("5+5=10"));
	})
})

describe("model.calculate", function(){
	it("should do order of operations", function(){
		assert.equal("5+5=10",model.calculate("5+5"));
	})
})

describe("view.render", function(){
	it('should throw "Digit Limit Met" if lastNumSeq > 9 chars', function(){
	})
	it('should throw "Digit Limit Met" if calculation > 9 chars', function(){
	})
	it('should throw "Digit Limit Met" if cache > 26 char', function(){
	})
	it('should show 0 if cache is blank', function(){
	})
	it('should render curBuffer after Clearall or clearEntry', function(){
		assert.equal(a,b);
	})
})


describe('view.render CACHE RESETS', function(){
	it('should return the number after "=" if it is present', function(){
	})
})


describe("util.SplitNumAndOper", function(){
	it('should have "6+4+3" return [6,"+",4,"+",3]', function(){
		const a = util.splitNumAndOper("6+4+3");
		assert.deepEqual(a,[6,'+',4,'+',3]);
	})
	it('should avoid splitting negative(-) sign from previous calculation', function(){
	})
})

describe('util.shuntyardSort', function(){
	it('should convert infix to PEMDAS-sorted postfix', function(){
		const infix = [1,'+',2,'x',3,'+',4];
		const postfix = [1,2,3,'x','+',4,'+'];
		assert.deepEqual(postfix, util.shuntyardSort(infix));
	})
})
describe('util.shuntyardCalc', function(){
	it('should calculate postfix equation', function(){
			const sortedPostfix = [1,2,3,'x','+',4,'+'];
			assert.equal(11, util.shuntyardCalc(sortedPostfix));
	})
})

describe('util.grabLastToken', function(){
	it('should grab last token if operators present', function(){
		assert.equal("123",util.grabLastToken("99999+123"));
	})
	it('should return 0 if "" is argument', function(){
		assert.equal("",util.grabLastToken(""));
	})
	it('should grab operator if it is last value', function(){
		assert.equal("+",util.grabLastToken("99+"));
	})
	it('should grab 0. if its a value if input is 0.', function(){
		assert.equal("0.",util.grabLastToken("0."));
	})
})

// RUN MOCHA
mocha.run()
