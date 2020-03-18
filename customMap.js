/*
 * map()
 * 
 * input : callback, [thisArg]
 * return : new arr applied callback
 * func : callback have cur, index, array 
 * special : thisArg is bind some this
 * 
 * this time use reduce!
*/

exports.customMap = function (callback, thisArg) {
    return this.reduce((acc, cur, i) => { 
        acc.push(callback(cur, i, this))
        return acc;
    }, []);
}