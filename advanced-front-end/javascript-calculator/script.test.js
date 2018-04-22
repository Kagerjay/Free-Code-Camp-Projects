// MOCHA - test

// UI
mocha.setup('bdd')

mocha.setup({
	ui:'bdd',

})

// CHAI
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

// Based on http://yeoman.io/contributing/testing-guidelines.html

describe('MODEL', function(){
	describe('getEqualSignAndNumber', () =>{
		it('do nothing if no equal sign', () =>{
			assert.equal("555",model.getEqualSignAndNumber("555"));
		})
		it('grab equal sign and number if present', () =>{
			assert.equal("=10",model.getEqualSignAndNumber("5+5=10"));
		})
	})
	describe("pushDot", () =>{
		it('allow only one "." per number token', () =>{
			assert.equal("9.99",model.pushDot("9.99"));
		})
		it('add . if none present', () =>{
			assert.equal("999x9.",model.pushDot("999x9"));
		})
		it('reset to 0. if cache blank', () =>{
			assert.equal("0.",model.pushDot(""));
		})
		it('reset to 0. if lastCall was calculate', () =>{
			assert.equal("0.",model.pushDot("999","calculate"));
		})
		it('allow multiple "." for multiple numeric tokens', function(){
			assert.equal("12.34+56.",model.pushDot("12.34+56"));
		})
	})
	describe("pushNumber", () =>{
		it("push number as a char", () =>{
			assert.equal("9",model.pushNumber("", 9));
		})
		it("concatenate as chars not add", () =>{
			assert.equal("99", model.pushNumber('9', '9'));
		})
		it('reset if lastCall is calculate', () =>{
			assert.equal("5",model.pushNumber("=999","5"));
		})
	})

	describe("pushOperator", () =>{
		it('forbid sequential operators', () =>{
			assert.equal("999+555+", model.pushOperator("999+555+","+"));
		})
		it('forbid operators on empty cache', () =>{
			assert.equal("",model.pushOperator("","+"));
		})
		it('behave normal if lastcall is calculate', () =>{
			assert.equal("999+",model.pushOperator("=999","+"));
		})
	})

	describe("clearAll", () =>{
		it("clear everything", () =>{
			assert.equal("", model.clearAll("555+555"));
		})
	})

	describe("clearEntry", () =>{
		it("delete all if no operators found", () =>{
			assert.equal("", model.clearEntry("5555"));
		})
	  it("delete operator if its cache's last char", () =>{
			assert.equal("555",model.clearEntry("555+"));
		})
		it("delete number token before an operator",() =>{
			assert.equal("555+",model.clearEntry("555+444"));
		})
		it('clear all if lastcall is calculate', () =>{
			assert.equal("",model.clearEntry("5+5=10"));
		})
	})

	describe("calculate", () =>{
		it("do order of operations", () =>{
			assert.equal("5+5=10",model.calculate("5+5"));
		})
	})
}) // END MODEL
///////////////////////////////////////////////////////////
describe('VIEW', function(){
	describe("render", () =>{
		it('throw "Digit Limit Met" if lastNumSeq > 9 chars', () =>{
		})
		it('throw "Digit Limit Met" if calculation > 9 chars', () =>{
		})
		it('throw "Digit Limit Met" if cache > 26 char', () =>{
		})
		it('show 0 if cache is blank', () =>{
		})
		it('render curBuffer after Clearall or clearEntry', () =>{
		})
	})
	describe('render CACHE RESETS', () =>{
		it('return the number after "=" if it is present', () =>{
		})
	})
}) // END VIEW
///////////////////////////////////////////////////////////
describe('UTIL', function(){
	describe("splitNumAndOper", () =>{
		it('have "6+4+3" return [6,"+",4,"+",3]', () =>{
			assert.deepEqual([6,'+',4,'+',3], util.splitNumAndOper("6+4+3"));
		})
		it('avoid splitting negative(-) sign from previous calculation', () =>{
		})
	})

	describe('shuntyardSort', () =>{
		it('convert infix to PEMDAS-sorted postfix', () =>{
			const infix = [1,'+',2,'x',3,'+',4];
			const postfix = [1,2,3,'x','+',4,'+'];
			assert.deepEqual(postfix, util.shuntyardSort(infix));
		})
	})
	describe('shuntyardCalc', () =>{
		it('calculate postfix equation', () =>{
				const sortedPostfix = [1,2,3,'x','+',4,'+'];
				assert.equal(11, util.shuntyardCalc(sortedPostfix));
		})
	})

	describe('grabLastToken', () =>{
		it('grab last token if operators present', () =>{
			assert.equal("123",util.grabLastToken("99999+123"));
		})
		it('return 0 if "" is argument', () =>{
			assert.equal("",util.grabLastToken(""));
		})
		it('grab operator if it is last value', () =>{
			assert.equal("+",util.grabLastToken("99+"));
		})
		it('grab 0. if its a value if input is 0.', () =>{
			assert.equal("0.",util.grabLastToken("0."));
		})
	})
}) // END UTIL


// RUN MOCHA
mocha.run()
