let score = 33;
let age = 56;
console.log(typeof score);
console.log(typeof age);
// '33'=> 33
//"33abce"=> Nan(not a number)
//true =>1, false =>0,
let isLogegedIn = 1;
let booleanLoggedIn = Boolean(isLogegedIn);
console.log(booleanLoggedIn);
// 1=> true, 0=> false, ""=>false, "Hitexh"=>true
let isNumber = 33;
let stringisNumber = String(isNumber);
console.log(stringisNumber);
console.log(typeof stringisNumber);

// **************OPERATIONS*****************
//console.log(2+2)
//console.log(2-2)
//console.log(2/2)
//console.log(2*2)
//console.log(2**2)2 ki power 2
//console.log(2**7) 2 ki power 7
//console.log(2%5) modulus=remiander value
//console.log("1"+2) =>12 string strat me to agy sbko string me convert kia jeye ga
//console.log(1+"2") => 12
//console.log("1"+2 + 2) => 122
//console.log(1+2 +"2") => 32string end me to phly conversion ho jaye gi
//use pranthese to give direction
console.log((3 + 9) * 6);
//***************Comparison*********************
// console.log( null > 0)
// console.log( null < 0)
// console.log( null = 0)
// console.log( null == 0)
// console.log( null >= 0)
//console.log( undefined < 0)
//console.log( undefined > 0)
//console.log( undefined == 0)
//avoid above mentioned like comparison in js that;s not professional
// === strickly check and also data type
//console.log("2"==2); will show both equal as convert string into data type
//console.log("2"==2); strickly checked, will not show equal as strings != number
// let score = 33;
// let age = 56;
// console.log(typeof score);
// console.log(typeof age);
// '33'=> 33
//"33abce"=> Nan(not a number)
//true =>1, false =>0,
// let isLogegedIn = 1;
// let booleanLoggedIn = Boolean(isLogegedIn);
// console.log(booleanLoggedIn);
// 1=> true, 0=> false, ""=>false, "Hitexh"=>true
// let isNumber = 33;
// let stringisNumber = String(isNumber);
// console.log(stringisNumber);
// console.log(typeof stringisNumber);
// **************OPERATIONS*****************
//console.log(2+2)
//console.log(2-2)
//console.log(2/2)
//console.log(2*2)
//console.log(2**2)2 ki power 2
//console.log(2**7) 2 ki power 7
//console.log(2%5) modulus=remiander value
//console.log("1"+2) =>12 string strat me to agy sbko string me convert kia jeye ga
//console.log(1+"2") => 12
//console.log("1"+2 + 2) => 122
//console.log(1+2 +"2") => 32string end me to phly conversion ho jaye gi
//use pranthese to give direction
console.log((3 + 9) * 6);
//***************Comparison*********************
// console.log( null > 0)
// console.log( null < 0)
// console.log( null = 0)
// console.log( null == 0)
// console.log( null >= 0)
//console.log( undefined < 0)
//console.log( undefined > 0)
//console.log( undefined == 0)
//avoid above mentioned like comparison in js that;s not professional
// === strickly check and also data type
//console.log("2"==2); will show both equal as convert string into data type
//console.log("2"==2); strickly checked, will not show equal as strings != number
//************ DATA TYPES **********to store and access the data by using these data types
// Primitive types
//type: String, Number, Boolean, null,undefined, Symbol, BigInt
//non-primitive/reffernce
//array, objects, functions
const scorer =67;
 const scorersValue =67.90;
 const id = Symbol( "1,22,2");
 const anotherId = Symbol("1,22,2");
 console.log(id == anotherId);
 const BigInt =6846639260n;
 //***Array use big bracet***
 const myArray = ["hitesh",23, "doga"];
 console.log(myArray);
 //*****Objects pass key value in the  curlybrcaes******/
 const myObject ={
    age:23,
    class:"Three",
 }
 console.log(myObject);
 //******** Functions***
 //function(){} basic syntax