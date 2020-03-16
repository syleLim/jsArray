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

exports.customSlice = function (begin , end) {
    let newArr = [];
    
    end = end === undefined || end > this.length ? this.length : end;
    end = end < 0 ? this.length + end : end;
    begin = begin < 0 ? this.length + begin : begin;
    begin = begin < 0 ? 0 : begin;

    while (begin < end)
        newArr.push(this[begin++]);
    return (newArr);
}