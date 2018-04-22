// MOCHA - test

// UI
mocha.setup('bdd')

// CHAI
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();


describe('MODEL', function(){
	describe('getEqualSignAndNumber', () =>{
		it('should do nothing if there is no equal sign', () =>{
			assert.equal("555",model.getEqualSignAndNumber("555"));
		})
		it('should grab equal sign and Number if present', () =>{
			assert.equal("=10",model.getEqualSignAndNumber("5+5=10"));
		})
	})
	describe("pushDot", () =>{
		it('should allow only one "."', () =>{
			assert.equal("9.99",model.pushDot("9.99"));
		})
		it('should add . if none present', () =>{
			assert.equal("999x9.",model.pushDot("999x9"));
		})
		it('should add zero char before . if blank', () =>{
			assert.equal("0.",model.pushDot(""));
		})
		it('should do nothing & delete = sign if previous call was calculate', () =>{
			assert.equal("0.",model.pushDot("=999"));
		})
	})
	describe("pushNumber", () =>{
		it("should push number as a char", () =>{
			assert.equal("9",model.pushNumber("", 9));
		})
		it("should not add numbers but concatenate as chars", () =>{
			assert.equal("99", model.pushNumber('9', '9'));
		})
		it('should do nothing & delete = sign if previous call was calculate', () =>{
			assert.equal("5",model.pushNumber("=999","5"));
		})
	})

	describe("pushOperator", () =>{
		it('should disallow sequential operators', () =>{
			assert.equal("999+555+", model.pushOperator("999+555+","+"));
		})
		it('should disallow operators on empty var', () =>{
			assert.equal("",model.pushOperator("","+"));
		})
		it('should behave normally and delete "=" sign if previous call was calc', () =>{
			assert.equal("999+",model.pushOperator("=999","+"));
		})
	})

	describe("clearAll", () =>{
		it("should clear everything", () =>{
			assert.equal("", model.clearAll("555+555"));
		})
	})

	describe("clearEntry", () =>{
		it("should delete all if no operators found", () =>{
			assert.equal("", model.clearEntry("5555"));
		})
	  it("should delete operator if it is last character", () =>{
			assert.equal("555",model.clearEntry("555+"));
		})
		it("should delete number token before an operator",() =>{
			assert.equal("555+",model.clearEntry("555+444"));
		})
		it('should clear everything if calculate was last operation', () =>{
			assert.equal("",model.clearEntry("5+5=10"));
		})
	})

	describe("calculate", () =>{
		it("should do order of operations", () =>{
			assert.equal("5+5=10",model.calculate("5+5"));
		})
		it('')
	})
}) // END MODEL

describe('VIEW', function(){
	describe("render", () =>{
		it('should throw "Digit Limit Met" if lastNumSeq > 9 chars', () =>{
		})
		it('should throw "Digit Limit Met" if calculation > 9 chars', () =>{
		})
		it('should throw "Digit Limit Met" if cache > 26 char', () =>{
		})
		it('should show 0 if cache is blank', () =>{
		})
		it('should render curBuffer after Clearall or clearEntry', () =>{
		})
	})
	describe('render CACHE RESETS', () =>{
		it('should return the number after "=" if it is present', () =>{
		})
	})
}) // END VIEW


describe('UTIL', function(){
	describe("splitNumAndOper", () =>{
		it('should have "6+4+3" return [6,"+",4,"+",3]', () =>{
			assert.deepEqual([6,'+',4,'+',3], util.splitNumAndOper("6+4+3"));
		})
		it('should avoid splitting negative(-) sign from previous calculation', () =>{
		})
	})

	describe('shuntyardSort', () =>{
		it('should convert infix to PEMDAS-sorted postfix', () =>{
			const infix = [1,'+',2,'x',3,'+',4];
			const postfix = [1,2,3,'x','+',4,'+'];
			assert.deepEqual(postfix, util.shuntyardSort(infix));
		})
	})
	describe('shuntyardCalc', () =>{
		it('should calculate postfix equation', () =>{
				const sortedPostfix = [1,2,3,'x','+',4,'+'];
				assert.equal(11, util.shuntyardCalc(sortedPostfix));
		})
	})

	describe('grabLastToken', () =>{
		it('should grab last token if operators present', () =>{
			assert.equal("123",util.grabLastToken("99999+123"));
		})
		it('should return 0 if "" is argument', () =>{
			assert.equal("",util.grabLastToken(""));
		})
		it('should grab operator if it is last value', () =>{
			assert.equal("+",util.grabLastToken("99+"));
		})
		it('should grab 0. if its a value if input is 0.', () =>{
			assert.equal("0.",util.grabLastToken("0."));
		})
	})
})


// RUN MOCHA
mocha.run()
