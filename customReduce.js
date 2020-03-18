/*
 * reduce()
 * 
 * input : callback, [intial]
 * return : new arr applied callback
 * func : callback have acc , cur, index => acc is accumulator of e applied callback /cur is current element /index is index of e
 * special : when inital is set, acc start with intial, if not start arr[0]
 * 
*/

exports.customReduce = function (callback, initial) {
    let acc = initial === undefined ?  this[0] : initial;
    let i
    
    i = initial === undefined ? 0 : -1;
    while (++i < this.length)
        acc = callback(acc, this[i], i);
    return (acc);
}