// Assignment operators

// An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. That is, x = f() is an assignment expression that assigns the value of f() to x.
// There are also compound assignment operators that are shorthand for the operations listed in the following table:
// Assignment	                    x = f()	x = f()
// Addition assignment	            x += f()	x = x + f()
// Subtraction assignment	        x -= f()	x = x - f()
// Multiplication assignment	    x *= f()	x = x * f()
// Division assignment	            x /= f()	x = x / f()
// Remainder assignment	            x %= f()	x = x % f()
// Exponentiation assignment	    x **= f()	x = x ** f()
// Left shift assignment	        x <<= f()	x = x << f()
// Right shift assignment	        x >>= f()	x = x >> f()
// Unsigned right shift assignment	x >>>= f()	x = x >>> f()
// Bitwise AND assignment	        x &= f()	x = x & f()
// Bitwise XOR assignment	        x ^= f()	x = x ^ f()
// Bitwise OR assignment	        x |= f()	x = x | f()
// Logical AND assignment	        x &&= f()	x && (x = f())
// Logical OR assignment	        x ||= f()	x || (x = f())
// Nullish coalescing assignment	x ??= f()	x ?? (x = f())

// Comparison operators//

// A comparison operator compares its operands and 
// returns a logical value based on whether the comparison is true. 
// The operands can be numerical, string, logical, or object values. 
// Strings are compared based on standard lexicographical ordering, using Unicode values. 
// In most cases, if the two operands are not of the same type, 
// JavaScript attempts to convert them to an appropriate type for the comparison. 
// This behavior generally results in comparing the operands numerically. 
// The sole exceptions to type conversion within comparisons involve the === and !== operators, which perform strict equality and inequality comparisons.
//  These operators do not attempt to convert the operands to compatible types before checking equality. 
//  The following table describes the comparison operators in terms of this sample code:

// Equal (==)	Returns true if the operands are equal.	3 == var1
// "3" == var1
// 3 == '3'

// Not equal (!=)	Returns true if the operands are not equal.	var1 != 4
// var2 != "3"

// Strict equal (===)	Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS.	
//3 === var1

// Strict not equal (!==)	Returns true if the operands are of the same type but not equal, or are of different type.	
//var1 !== "3"
// 3 !== '3'

// Greater than (>)	Returns true if the left operand is greater than the right operand.	var2 > var1
// "12" > 2

// Greater than or equal (>=)	Returns true if the left operand is greater than or equal to the right operand.	var2 >= var1
// var1 >= 3

// Less than (<)	Returns true if the left operand is less than the right operand.	var1 < var2
// "2" < 12

// Less than or equal (<=)	Returns true if the left operand is less than or equal to the right operand.	var1 <= var2
// var2 <= 5



// Arithmetic operators

// An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value.
//  The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/). 
//  These operators work as they do in most other programming languages when used with floating point numbers
//  (in particular, note that division by zero produces Infinity). For example:

1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true

// Remainder (%)	Binary operator. Returns the integer remainder of dividing the two operands.	
//12 % 5 returns 2.

// Increment (++)	Unary operator. Adds one to its operand. If used as a prefix operator (++x), returns the value of its operand after adding one; if used as a postfix operator (x++), returns the value of its operand before adding one.	If x is 3, then ++x sets x to 4 and returns 4, whereas x++ returns 3 and, only then, sets x to 4.

// Decrement (--)	Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator.	If x is 3, then --x sets x to 2 and returns 2, whereas x-- returns 3 and, only then, sets x to 2.

// Unary negation (-)	Unary operator. Returns the negation of its operand.	If x is 3, then -x returns -3.

// Unary plus (+)	Unary operator. Attempts to convert the operand to a number, if it is not already.	
// +"3" returns 3.
// +true returns 1.

// Exponentiation operator (**)	Calculates the base to the exponent power, that is, base^exponent	
//2 ** 3 returns 8.
// 10 ** -1 returns 0.1.



// Bitwise operators
// A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.
// The following table summarizes JavaScript's bitwise operators.

// Bitwise AND	a & b	Returns a one in each bit position for which the corresponding bits of both operands are ones.
// Bitwise OR	a | b	Returns a zero in each bit position for which the corresponding bits of both operands are zeros.
// Bitwise XOR	a ^ b	Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.]
// Bitwise NOT	~ a	Inverts the bits of its operand.
// Left shift	a << b	Shifts a in binary representation b bits to the left, shifting in zeros from the right.
// Sign-propagating right shift	a >> b	Shifts a in binary representation b bits to the right, discarding bits shifted off.
// Zero-fill right shift	a >>> b	Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left.


// Logical operators
// Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value. However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value. The logical operators are described in the following table.

// Logical operators
// Operator	Usage	Description
// Logical AND (&&)	expr1 && expr2	Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.
// Logical OR (||)	expr1 || expr2	Returns expr1 if it can be converted to true; otherwise, returns expr2. Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.
// Logical NOT (!)	!expr	Returns false if its single operand that can be converted to true; otherwise, returns true.




// Conditional (ternary) operator
// The conditional operator is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition. The syntax is:

condition ? val1 : val2
//If condition is true, the operator has the value of val1. Otherwise it has the value of val2. You can use the conditional operator anywhere you would use a standard operator.

const status = age >= 18 ? "adult" : "minor";
//This statement assigns the value "adult" to the variable status if age is eighteen or more. Otherwise, it assigns the value "minor" to status.



