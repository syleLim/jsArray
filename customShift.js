/*
 * shift()
 * 
 * input : 
 * return : length of array
 * func : get first data and shtift left
 * special : in [] and get undefiend
 * 
*/

exports.customShift = function () {
    let data;
    let i;

    if (this.length == 0)
        return (undefined);

    data = this[0];
    delete this[0];
    i = 0;
    while (++i < this.length)
        this[i - 1] = this[i];
    --this.length;
    return (data);
}