/*
 * unshift()
 * 
 * input : 
 * return : length of array
 * func : get first data and shtift left
 * 
*/

exports.customUnshift = function (data) {
    let i;

    i = this.length;
    while (--i >= 0)
        this[i + 1] = this[i];
    this[0] = data;
    
    return (this.length);
}