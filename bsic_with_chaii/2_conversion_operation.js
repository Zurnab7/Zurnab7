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
 //function(){} basic syntax => add variable and run console inside the curlybraces
const myFunction = function(){
    console.log("Hello WOrld");
}
//**Data Type----to find this pass variable inside the typeof */
//************Memmory=Stack (Stack) and Heap (Non-Primitve)**************/
//**************Strings using backstick =string interppolation*******by using backstick we will directly inject our variable in the console as using ${}
const back ="hitexsh";
const backAge =56;
console.log(`he is my favourte ${back} repo and must be my good friend ${backAge}`);
//*********************NUmber + Mathsms;s; ******************/
let hundred=1000;
console.log(hundred.toLocaleString('eng'))
//*************Maths******* */
console.log(Math)
//Math.abs is absolute to convert the -ive value into +ive
console.log(Math.abs(-4))
//formula for math as we want to add plus onein the floor value to get value betwwen min and max
console.log(Math.floor(Math.random()*10)+1) 
const min =10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min +1 ))+ min) ;
//*************Date************ */
let myDate = new Date;
console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toISOString);
console.log(myDate.toJSON);
console.log(myDate.toLocaleDateString); 
console.log(Date.now());

