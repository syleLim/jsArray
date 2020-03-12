/*
 * push()
 * 
 * input : data
 * return : length of array
 * func : insert data last
 * 
*/

exports.customPush = function (data) {
    let i;

    i = -1;
    while (++i < this.length)
        ;
    this[i] = data;
    
    return (i + 1);
}
