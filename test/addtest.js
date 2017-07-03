const assert = require('chai').assert;

const add = require('../add');

describe('Add', function(){
	it("Should add 5 and return 10", function(){
		var result = add(5);
		assert.equal(result, 10);
	});	

	it("Should return a number", function(){
		var result = add(5);
		assert.typeOf(result, 'number');
	});
});