// console.log("hello, it's me, I was wondering if after all these years~");

// [SECTIONS] Operators

/*

Arithmetic Operators
	-Perform Calculations
		-addition (+)
		- subtraction (-)
		- multiplication (*)
		- division (/)
		- modulus (%)
		- exponentiation -  (**)


*/

function divideNum(num1, num2) {
	result = num1 / num2;
	console.log(result);
	return result;
}

let quotientResult = divideNum(50, 5);

console.log(`The result of the operation is ${quotientResult}`);

/*
	Assignment Operator
	 - is used to assign value to a variable or property of an object
	 - equal sign (=)
*/






let variable = 'initial value'

let assignNumber = 8;

// long method
assignNumber = assignNumber + 2;
console.log(`The result of the addition assignment operator is ${assignNumber}`);


// addition assignement operator
assignNumber += 2;
console.log(`The result of the addition assignment operator is ${assignNumber}`);


//subtraction/mupltiplication/division/modulus assignment operator(-=, *=, /=, %=)

let assignResult = 4;

assignResult -= 2;

console.log(`The result of the subtraction assignment operator is ${assignResult}`);

assignResult *= 2;
console.log(`The result of the multiplication assignment operator is ${assignResult}`);

assignResult /= 3;
console.log(`The result of the division assignment operator is ${assignResult}`);

let assignResult1 = 4
assignResult1 %= 3;
console.log(`The result of the modulus assignment operator is ${assignResult1}`);

//PEMDAS

let mdas = 1 + 2 - 3 * 4 / 5;
console.log(mdas);
/*
	mdas = 1 + 2 - 3 * 4 / 5;
	mdas = 1 + 2 - 12 / 5;
	mdas = 1 + 2 - 2.4;
	mdas = 3 - 2.4;
	mdas =  0.60


*/
// order of operation can be changed by adding parentheses to our logic.

let pemdas = 1 + (2 - 3) * (4 / 5);
/*
	by adding parenthese '()', the order of operation chaned prioritizing operations inside the parentheses
	let pemdas = 1 + (2 - 3) * (4 / 5);
	let pemdas = 1 + (2 - 3) * 0.8;
	let pemdas = 1 + (-1) * 0.8;
	let pemdas = 1 + -0.8;
	pemdas = 0.19 or 0.2;
*/
console.log(`The result of the PEMDAS is ${pemdas}`)

// Increment operator is used to icnreased the value of variable by 1
//syntax: increment = increment + 1 => increment++

/*
	Two types of increment operators 
	- post increment(x++)
		- incraeses the value of x after it has been evaluated
	- pre increment	(++x)
		- increases the value of x before it has been evaluated

		x ++ (1)
		2 1 => 2 => 3


		++ 2 => 3 => 3


	*/
let x = 2;
console.log(x);

a = ++x;
console.log(a);

b = x++;
console.log(b);	

/*
	Decrement operator is used to decreased the value of  variable by 1

		- post decrement (x--)
		- pre decrement (--x)

*/
//The value of 'z' decreases by a value of one before returning and storting it in
let z = 3;
console.log(z);
// The value of z is at 3 before it was decremented
let decrement = --z;
// The value of 'z' was decreased reassigning the value to 2
console.log(`THe result of pre decrement is ${z}`);
decrement = z--;

console.log(`The result of post decrement is ${z}`);


// Comparison Operator
/*
comparison operator 
- are used to compare the values of the left and right operands
- return operands

	- Equality or Loose Equality (==)
	- Strict Equality (===)
	- Inequality or Loose Inequality (!)
	- Strict Equality (!==)
*/
/*
	Equality or Loose equality operator
		- is used to compare two values for equality. The operator return true if the values
are equalts and false otherwise.
		- the equality performs type coercion, which means it converts the values
		being compared to a common type before performing the comparison
*/
console.log(1==1);//true
console.log(1=='1');//true - the string '1' is coerced to the number 1 before the comparison is made
console.log(2==1);//false
console.log(true==1)//true = the boolean true is coerced to the number before the comparison is made
console.log(null==undefined)//true - null and undefined are equal to each other in the context that they
//have no value


/*
	Strict Equality
		- is used to compare two values for equality
		- the operator returns true if the values are of the same
		type and have same value and false otherwise
		- strict equality does not perform type coercion which means 
		the value being compared must be of the same type to return true
*/

console.log(2 === 2);// true
console.log(2 === '2')//false - the string '2' is not the same as number 2
console.log(true === 1)//false 
console.log(null === undefined)// flase - null and undefined are not the same type

// Note: As good practice we have to use strict equality operator instead of loose equality
// to avoid unexpected ersults due to  type coercion


/*
	Type coercion
	- is the implicit conversion of values from oen data type to another
	- this happeneds when operations are performed on different data types
	that would normally not be possible and yield the irregular
	- values are automatically converted from one data type to another in order to
	resolve operation	
*/
let numA = '10';//numstring
let numB = 12;// number

// adding
let coercionResult = numA + numB;
console.log(typeof(coercionResult));
console.log(coercionResult);
let numC = 16;
let numD = 14;

let nonCoercion = numC + numD;
console.log(typeof(nonCoercion))

let numE = true + 1;
console.log(numE);


let numF = false + 2;
console.log(numF);
console.log(typeof(numF));