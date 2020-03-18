/*
 * lastIndexOf()
 * 
 * input : data, [index]
 * return : index of data in array
 * func : find index of data same start last index
 * special : paramter index is starting position
 *             
*/

exports.customLastIndexOf = function (data, index = this.length) {
    let i;

    i = index;
    while (--i >= 0)
        if (data === this[i])
            return (i);
    return (-1);
}