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

describe("Util.SplitNumAndOper Tests", function(){
	it('should have "6+4+3" return [6,"+",4,"+",3]', function(){
		const a = util.splitNumAndOper("6+4+3");
		assert.deepEqual(a,[6,'+',4,'+',3]);
	})
	it('should have "6-4-3" return [6,"+",-4,"+",-3]', function(){
		const a = util.splitNumAndOper("6-4-3");
		assert.deepEqual(a,[6,'+',-4,'+',-3]);
	})
})

// GENERIC TESTS
describe("Model.pushValues Generic Tests", function(){
	// GENERIC TESTS UPTOP
	const blank = {cache:'', storage:''};
	const zeroed = {cache: 0, storage: 0};

	it('should add a "."', () => {
		let a = model.pushValue('.', blank);
		let b = {cache:'.', storage:'.'}
		a = {cache:'0.', storage:'0.'};
		assert.equal(a,b);
	})
})

// EDGE TESTS
describe("Model.pushValue Edge Tests", function(){
	it('should disallow multiple "." operator', function(){
		let a = {cache: '55.5', storage: '55.5'};
		let b = model.pushValue('.',a);
		assert.equal(a,b);
	})
	it('should disallow sequential operators', function(){
		let a = {cache: '55', storage: '55x'};
		let b = model.pushValue('55',a);
		assert.equal(a,b);
	})
})

describe("Model.clearEntry test", function(){

})

describe("Model.clearAll test", function(){

})

describe("Model.calculate test", function(){

})

// RUN MOCHA
mocha.run()
