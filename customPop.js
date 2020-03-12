/*
 * pop()
 * 
 * input : 
 * return : data of last
 * func : get last data and delete it / length--
 * 
 * special : when array lenth is 0, return undefined
 * 
*/

exports.customPop = function () {
    let data;
    let i;
    
    if (this.length == 0)
        return (data);

    i = -1;
    while (++i < this.length - 1)
        ;
    data = this[i];
    delete this[i];
    --this.length;
    
    return (data);
}