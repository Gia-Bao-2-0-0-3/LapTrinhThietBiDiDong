var a = [5 , 3 , 1, 2 ,4, 8, 9, 10];

Array.prototype.myFind = function(callback) {
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
}

var b = a.myFind(function(item, index) {
    if (item > 7) {
        return item;
    }
    
});

console.log(b);