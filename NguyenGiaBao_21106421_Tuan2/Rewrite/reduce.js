var a = [5 , 3 , 1, 2 ,4, 8, 9, 10];

Array.prototype.myReduce = function(callback, initialValue) {
    var accumulator = (initialValue === undefined) ? undefined : initialValue;
    for (var i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
}

var b = a.myReduce(function(accumulator, item, index) {
    return accumulator + item;
}, 0);

console.log(b);