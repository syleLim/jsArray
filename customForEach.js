/*
 * forEach()
 * 
 * input : callback [thisArg]
 * return : none
 * func : apply callback to components in array, thisArg is this component when work in foreach
 * special : array must comprehension insert, but 2dimension is not
 *              it 1dim is deep copy but 2dim is no
 * 
*/

exports.customForEach = function (callback , thisArg = this) {
    let i;

    i = -1;
    while (++i < this.length)
        callback(this[i], i, thisArg);
}