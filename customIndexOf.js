/*
 * indexOf()
 * 
 * input : data, [index]
 * return : index of data in array
 * func : find index of data same
 * special : index is starting position
 *             
*/

exports.customIndexOf = function (data, index = 0) {
    let i;

    i = index - 1;
    while (++i < this.length)
        if (data === this[i])
            return (i);
    return (-1);
}