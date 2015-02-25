'use strict';

var isNegative = require( './../lib' );

console.log( isNegative( -Math.PI ) );
// returns true

console.log( isNegative( 0 ) );
// returns false

console.log( isNegative( 1 ) );
// returns false
