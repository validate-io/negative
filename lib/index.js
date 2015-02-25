/**
*
*	VALIDATE: negative
*
*
*	DESCRIPTION:
*		- Validates if a value is a negative number.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isNumber = require( 'validate.io-number' );


// ISNEGATIVE //

/**
* FUNCTION: isNegative( value )
*	Validates if a value is a negative number.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a negative number
*/
function isNegative( value ) {
	return isNumber( value ) && value < 0;
} // end FUNCTION isNegative()


// EXPORTS //

module.exports = isNegative;
