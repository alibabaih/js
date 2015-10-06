"use strict";

/*
    I. Essential JavaScript
        Lecture 1.1. JavaScript Introduction
            1.	Syntax overview
            2.	Primitive data types. Objects. Arrays
            3.	Primitive type wrappers. valueOf(). toString()
            4.	Operators: equality, logical, etc.
            5.	Example: common tips & tricks
*/

//1. Syntax overview
console.log('It works.');

//2. Primitive data types. Objects. Arrays (string, number, boolean, object, array, null, undefined)

var a = 'This is string';
var b = 12.8;
var c = '12';
var d = {};
var e = true;
var f1 = [1,2,3,"string", 1.32, true];
var f2 = new Array(1,2,3,"string", 1.32, true);
var f3 = {key1: "val1", key2: "val2",};

console.log('***difference between null and undefined***');

var j1;
console.log('var j1 was declared but wasn\'t assigned: typeof' + typeof(j1) + ' ' + j1);

var j2 = null;
console.log('var j2 was declared and assigned: typeof' + typeof(j2) + ' ' + j2);

console.log('var a is a: ' + typeof(a) + ' and contains: ' + a);
console.log('var a is a: ' + typeof(b) + ' and contains: ' + b);
console.log('var a is a: ' + typeof(c) + ' and contains: ' + c);
console.log('var a is a: ' + typeof(d) + ' and contains: ' + d);
console.log('var a is a: ' + typeof(e) + ' and contains: ' + e);
console.log('var a is a: ' + typeof(f1) + ' and contains: ' + f1);
console.log('var a is a: ' + typeof(f2) + ' and contains: ' + f2);
console.log('var a is a: ' + typeof(f3) + ' and contains: ' + f3.key1 + ' ' + f3.key2);

//3. Primitive type wrappers. valueOf(). toString()

console.log('convert var f3 to string' + toString(f3));

var convertB = toString(b);

console.log('convert value of the var b to string' + convertB + ' and check ' + typeof(convertB));



//Operators: equality, logical, etc.




//Example: common tips & tricks