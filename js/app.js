//! Variables
//? 1.Declare two variables: admin and name.
//? Assign the value "John" to name.
//? Copy the value from name to admin.
//? Show the value of admin using alert (must output “John”).

// let name = "John";
// let admin = name;
// alert(admin)


//? 2.Create a variable with the name of our planet. How would you name such a variable?
//? Create a variable to store the name of a current visitor to a website. How would you name that variable?

// let ourPlanet;
// let currentVisitor;


//? 3.
// const BIRTHDAY = "18.04.1982";
// const age = someCode(BIRTHDAY);

//! Data type
//? What is the output of the script?

// let name = "Ilya";
// alert( `hello ${1}` ); // hello 1
// alert( `hello ${"name"}` );  // heloo name
// alert( `hello ${name}` ); // hello Ilya


//! Comparisons
//? What will be the result for these expressions?

5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

//! Basic operators, maths
//? 1.What are the final values of all variables a, b, c and d after the code below?

// let a = 1, b = 1;
// let c = ++a; 
// let d = b++; 

// a->2
// b->2
// c->2
// d->1


//? 2.What are the values of a and x after the code below?

// let a = 2;
// let x = 1 + (a *= 2);

// a-> 4
// x-> 5


//? 3.What are results of these expressions?

"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 //NaN
"  -9  " + 5 // -9 5
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2



//? 4
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(a+b); // 12

let c = Number(prompt("First number?", 1));
let d = Number(prompt("Second number?", 2));
alert(c+d) // 3