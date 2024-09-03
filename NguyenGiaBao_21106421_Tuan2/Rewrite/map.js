var a = [5 , 3 , 1, 2 ,4, 8, 9, 10];

Array.prototype.myMap = function(callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

var b = a.myMap(function(item, index) {
    return item * 2;
    
});

console.log(b);