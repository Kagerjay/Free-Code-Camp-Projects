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
	describe('getAnswer', function(){
		it('grab number token after =', function(){
			assert.equal("99",model.getAnswer("44+55=99"));
		})
	})

	describe("pushDot", () =>{
		it('forbid multiple "." for one token', () =>{
			assert.equal("9.99",model.pushDot("9.99"));
		})
		it('add dot if none present', () =>{
			assert.equal("999x9.",model.pushDot("999x9"));
		})
		it('add zero if empty cache', () =>{
			assert.equal("0.",model.pushDot(""));
		})
		it('reset to zero if calculate lastcall', () =>{
			assert.equal("0.",model.pushDot("999","calculate"));
		})
		it('limit one "." per token', function(){
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
			assert.equal("5",model.pushNumber("999","5","calculate"));
		})
	})

	describe("pushOperator", () =>{
		it('forbid sequential operators', () =>{
			assert.equal("999+555+", model.pushOperator("999+555+","+"));
		})
		it('forbid operators on empty cache', () =>{
			assert.equal("",model.pushOperator("","+"));
		})
		it('allow swappable operators', () => {
			assert.equal("123+", model.pushOperator("123-", "+"));
		})
	})

	describe("clearAll", () =>{
		it("clear everything", () =>{
			assert.equal("", model.clearAll("555+555"));
		})
	})

	describe("clearEntry", () =>{
		it("delete all if no operators", () =>{
			assert.equal("", model.clearEntry("5555"));
		})
	  it("delete operator if cache's last char", () =>{
			assert.equal("555",model.clearEntry("555+"));
		})
		it("delete number token before operator",() =>{
			assert.equal("555+",model.clearEntry("555+444"));
		})
		it('delete all if calculate lastcall', () =>{
			assert.equal("",model.clearEntry("5+5=10"));
		})
	})

	describe("calculate", () =>{
		it("do order of operations", () =>{
			assert.equal("5+5=10",model.calculate("5+5"));
		})
		it('handle 1 float calc',()=>{
			assert.equal("12.34+5=17.34", model.calculate("12.34+5"));
		})
		it('handle 2 float calc', () => {
			assert.equal("6.6+3.3=9.9", model.calculate("6.6+3.3"));
		})
		it('forbid incomplete operation', () => {
			assert.equal("6+", model.calculate("6+"));
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
		it('do simple math', () =>{
			assert.deepEqual([6,'+',4,'+',3], util.splitNumAndOper("6+4+3"));
		})
		it('tokenize negative numbers', () =>{
			assert.deepEqual([-1,'+',7], util.splitNumAndOper('-1+7'));
		})
		it('tokenize decimal numbers', function(){
			assert.deepEqual([12.34, '+', 5], util.splitNumAndOper('12.34+5'));
		})
	})

	describe('shuntyardSort', () =>{
		it('convert infix to sorted postfix', () =>{
			const infix = [1,'+',2,'x',3,'+',4];
			const postfix = [1,2,3,'x','+',4,'+'];
			assert.deepEqual(postfix, util.shuntyardSort(infix));
		})
	})
	describe('shuntyardCalc', () =>{
		it('calculate postfix', () =>{
				const sortedPostfix = [1,2,3,'x','+',4,'+'];
				assert.equal(11, util.shuntyardCalc(sortedPostfix));
		})
		it('calculate postfix with float values', () => {
			assert.equal(17.34,util.shuntyardCalc([12.34, 5, "+"]));
		})
		it('calculate postfix with negative numbers', () => {
			assert.equal(-1,util.shuntyardCalc([2,-3,"+"]));
		})
	})

	describe('grabLastToken', () =>{
		it('grab last numeric token', () =>{
			assert.equal("123",util.grabLastToken("99999+123"));
		})
		it('do nothing if arg is empty', () =>{
			assert.equal("",util.grabLastToken(""));
		})
		it('return operator if last char', () =>{
			assert.equal("+",util.grabLastToken("99+"));
		})
		it('handle floats', () =>{
			assert.equal("0.",util.grabLastToken("0."));
		})
	})
}) // END UTIL


// RUN MOCHA
mocha.run()
