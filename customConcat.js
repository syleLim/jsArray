/*
 * concat()
 * 
 * input : data [, data ...]
 * return : new array concatunated
 * func : connect array
 * special : array must comprehension insert, but 2dimension is not
 *              it 1dim is deep copy but 2dim is no
 * 
*/

function deepCopyOne (arr) {
    let newArr = new Array(arr.length);
    
    let i;

    i = -1;
    while (++i < arr.length)
        newArr[i] = arr[i];
    return (newArr);
}

exports.cunstomConcat = function (...args) {
    let newArr = deepCopyOne(this);

    args.forEach(arg => {
        if (typeof arg === typeof [])
            arg.forEach(e => {
                newArr.push(e);
            })
        else
            newArr.push(arg)
    })
    return (newArr);
}