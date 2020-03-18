/*
 * every()
 * 
 * input : callback, [thisArg]
 * return : bool
 * func : checking any components passing condition.
 * special : 
 * 
*/

exports.customSome = function (callback, thisArg) {
    let i;

    i = -1;
    callback.bind(thisArg);
    while (++i < this.length)
        if (callback(this[i]) === true)
            return (true);
    return (false);
}