/*
 * splice()
 * 
 * input : idx, num, [data ...]
 * return : new_arr composed of deleted`s
 * func : cut data and add data when [data ...] are put
 * 
 * special : when array lenth is 0, return undefined
 * 
*/

const { customPush } = require('./customPush.js');
Array.prototype.customPush = customPush;

exports.customSplice = function (idx, num, ...args) {
    const argLength = args.length;
    let arrLength = this.length;
    let returnArr = [];
    
    let i;
    let j;

    if (idx >= this.length)
        return (returnArr);
    num = num !== undefined && num < this.length - idx ? num : this.length - idx;
    i = -1;
    while (++i < num)
    {
        returnArr.customPush(this[idx + i]);
        delete this[idx + i];
    }
    j = -1;
    while (idx + i < arrLength)
    {
        this[idx + (++j)] = this[idx + i];
        delete this[idx + (i++)];
    }
    this.length = arrLength - num;
    arrLength = this.length;
    if (argLength !== 0)
    {
        i = -1;
        while (++i < arrLength - idx)
            this[arrLength + argLength - i - 1] = this[arrLength - i - 1];
        i = -1;
        while (++i < argLength)
            this[idx + i] = args[i];
    }
    return (returnArr);
}