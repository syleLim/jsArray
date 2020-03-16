/*
 * sort([call back])
 * 
 * input : way to sort
 * return : sorted array
 * func : sort with callback rule
 * special : if no input, ASCII sorting
 * 
*/
/*
    use charCodeAt(0) because it is too bigger code..
*/
function ascciCompare (a, b) {
    a = a.toString();
    b = b.toString();

    let i;

    i = -1;
    while (a[i] === b[i] && i < a.length && ++i < b.length)
        ;
    if (a[i] === undefined)
        return (-1);
    if (b[i] === undefined)
        return (1);
    return (a[i].charCodeAt(0) - b[i].charCodeAt(0));
}

exports.customSort = function (callback) {
    let i;
    let j;
    let temp;

    if (callback === undefined)
        callback = ascciCompare;
    i = this.length;
    while (--i >= 0)
    {
        j = i;
        while (--j >= 0)
            if (callback(this[i], this[j]) < 0)
            {
                temp = this[i];this[i] = this[j];this[j] = temp;
            }
    }
    return (this);
}