
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

console.log("===Test customSplice===")

const { customSplice } = require('./customSplice.js');
Array.prototype.customSplice = customSplice;
arr = [1, 2, 3, 4];
console.log("  before_arr : ", arr);
console.log("  return : ", arr.customSplice(1, 4, 7, 8, 9));
console.log("  next_arr : ", arr, "\n");

console.log("===Test customSort===")

const { customSort } = require('./customSort.js');
Array.prototype.customSort = customSort;
arr = [{no : 3, n : 'a'}, {no : 1, n: 'b'}, {no : 2, n:'c'}];
console.log("  before_arr : ", arr);
const f = (key) => {
    return function (a, b) {
        return a[key] - b[key];
    }
}
console.log("  return : ", arr.customSort(f('no')));
console.log("  next_arr : ", arr, "\n");
arr = ['aaaa', 'bb', 'aa', 'bbbb'];
console.log("  before_arr : ", arr);
console.log("  return : ", arr.customSort());
console.log("  next_arr : ", arr, "\n");


console.log("===Test customUnConcat===")

const {cunstomConcat} = require('./customConcat.js');
Array.prototype.cunstomConcat = cunstomConcat;
a = [1, 2, [5, 6]];
b = [4, 5]
c = [1, [3, 4, 5], 3]
console.log("  before_a : ", a, " before_b : ", b, " before_c : ", c , " + 2");
d = a.cunstomConcat(b, c, 2)
console.log("  return : ", d);
console.log("  after_a : ", a, " after_b : ", b, " after_c : ", c, '\n');
console.log("     value change");
console.log("  a[2][0] = 300, b[0] = 100, c[1][0] = 200");
a[2][0] = 300;b[0] = 100;c[1][0] = 200;
console.log("  change_value : ", d, '\n');

console.log("===Test customSlice===")

const {customSlice} = require('./customSlice.js');
Array.prototype.customSlice = customSlice;
arr = [1, 2, 3, 4];
console.log("  before_arr : ", arr);
console.log("  return : ", arr.customSlice(-5, 3));
console.log("  next_arr : ", arr, "\n");


console.log("===Test customIndexOf===")

const {customIndexOf} = require('./customIndexOf.js');
Array.prototype.customIndexOf = customIndexOf;
arr = [1, "string", "string", 4];
console.log("  arr : ", arr, " find 'string', index 2");
console.log("  return : ", arr.customIndexOf("string", 2), "\n");

console.log("===Test customLastIndexOf===")

const {customLastIndexOf} = require('./customLastIndexOf.js');
Array.prototype.customLastIndexOf = customLastIndexOf;
arr = [1, "string", "string", 4];
console.log("  arr : ", arr, " find 'string', index 2");
console.log("  return : ", arr.customLastIndexOf("string", 2), "\n");


console.log("===Test customForEach===")

const {customForEach} = require('./customForEach.js');
Array.prototype.customForEach = customForEach;
arr = [1, 2, 3, 4];
newArr = [];
function g () {
    this.b = 1;
    this.c = 2;
}
c = new g();
console.log("  arr : ", arr);
console.log("  return : ", arr.customForEach(e => {
    this.b = e
}, c));
console.log("  result : ", c.b);

console.log("===Test customReduce===")

const {customReduce} = require('./customReduce.js');
Array.prototype.customReduce = customReduce;
arr = [1, 2, 3, 4];
console.log("  arr : ", arr, " sum all thing");
console.log("  return : ", arr.customReduce((acc, cur, i) => {
    return acc + cur;    
}), "\n");
console.log("  arr : ", arr, " multiply 2 to string");
console.log("  return : ", arr.customReduce((acc, cur, i) => {
    return acc + (cur * 2);
}, []), "\n");

console.log("===Test customMap===")

const {customMap} = require('./customMap.js');
Array.prototype.customMap = customMap;
arr = [1, 2, 3, 4];
console.log("  arr : ", arr, "multiply * 2 arr");
console.log("  return : ", arr.customMap(e =>{
    return e * 2;
}));