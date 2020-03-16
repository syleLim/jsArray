
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