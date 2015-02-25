/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isNegative = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-negative', function tests() {

	it( 'should export a function', function test() {
		expect( isNegative ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool;

		bool = isNegative( -Math.PI );
		assert.ok( bool );

		bool = isNegative( Number.NEGATIVE_INFINITY );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			'5',
			0,
			1,
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isNegative( value );
		}
	});

});
