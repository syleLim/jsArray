
console.log("===Test customPush===")

const {customPush} = require('./customPush.js');
Array.prototype.customPush = customPush;
arr = [1, 2, 3];
console.log("  before_arr : ", arr);
console.log("  return : %d", arr.customPush(4));
console.log("  next_arr : ", arr, "\n");


console.log("===Test customPop===")

const {customPop} = require('./customPop.js');
Array.prototype.customPop = customPop;
arr = [1, 2, 3, 4];
console.log("  before_arr : ", arr);
console.log("  return : %d", arr.customPop());
console.log("  next_arr : ", arr, "\n");


console.log("===Test customShift===")

const {customShift} = require('./customShift.js');
Array.prototype.customShift = customShift;
arr = [1, 2, 3, 4];
console.log("  before_arr : ", arr);
console.log("  return : %d", arr.customShift());
console.log("  next_arr : ", arr, "\n");


console.log("===Test customUnShift===")

const {customUnshift} = require('./customUnshift.js');
Array.prototype.customUnshift = customUnshift;
arr = [2, 3, 4];
console.log("  before_arr : ", arr);
console.log("  return : %d", arr.customUnshift(1));
console.log("  next_arr : ", arr, "\n");