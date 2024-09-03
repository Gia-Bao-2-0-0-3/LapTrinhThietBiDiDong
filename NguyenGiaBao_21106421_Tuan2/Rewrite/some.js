var a = [5 , 3 , 1, 2 ,4, 8, 9, 10];

Array.prototype.mySome = function(callback) {
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
}

var b = a.mySome(function(item, index) {
    if (item > 7) {
        return item;
    }
    
});
console.log(b);