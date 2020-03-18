/*
 * every()
 * 
 * input : callback
 * return : bool
 * func : checking all components passing condition.
 * special : 
 * 
*/

exports.customEvery = function (callback) {
    let i;

    i = -1;
    
    while (++i < this.length)
        if (callback(this[i]) === false)
            return (false);
    return (true);
}