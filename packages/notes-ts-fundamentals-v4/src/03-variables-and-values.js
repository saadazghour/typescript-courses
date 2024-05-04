"use strict";
//* Variable Declarations & Inference
Object.defineProperty(exports, "__esModule", { value: true });
exports.RANDOM_WAIT_TIME = void 0;
var temperature = 6; //! inference
temperature = "warm"; //! type-checking
var humidity = 79; //! literal type
//* A type as a set of allowed values
temperature = 23; //✔️ (1)  - re-assignability of a let
temperature = humidity; //! (2) - type-checking
humidity = temperature; //! (3) - number is not of type `79`
humidity = 79; //✔️ (4) - 79 is of type `79`
humidity = 78; //! (5) - 78 is not of type `79`
var temp2 = 19; //! temp2's type is { all numbers }
var humid2 = 79; //! humidity's type is { 79 }
temp2 = 23; //! Is each member in { 23 } also in { all numbers }?
temp2 = humid2; //! Is each member in { 79 } also in { all numbers }?
humid2 = temp2; //! Is each member in { all numbers } also in { 79 }?
humid2 = 79; //! Is each member in { 79 } also in { 79 }
humid2 = 78; //! Is each member in { 78 } also in { 79 }
//* Implicit `any` and type annotations
// between 500 and 1000
exports.RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500;
var startTime = new Date();
var endTime;
setTimeout(function () {
    // endTime = 0 // Shoud be a Date, It's a bugs.
    endTime = new Date();
}, exports.RANDOM_WAIT_TIME);
//* Type Casting
var frontEndMastersFounding = new Date("Jan 1, 2012");
var date1 = frontEndMastersFounding;
var date2 = frontEndMastersFounding;
var humid3 = 79; //✔️ is 79 a number? If so, this is safe!
var date3 = "oops"; //! TypeScript thinks this is a Date now, but it's really a string
date3.toISOString(); //! what do we think will happen when we run this? 💥
console.log("logg", date3);
var date4 = "oops";
//! Function arguments and return values
// function add(a, b) {
//   return a + b // strings? numbers? a mix?
// }
// const result = add(3, "4")
// const p = new Promise(result);
/**/
exports.default = {};
