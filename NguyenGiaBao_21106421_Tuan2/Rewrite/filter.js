var a = [5,6,7,8,9,10];

Array.prototype.myFilter = function(callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

var b = a.myFilter(function(item, index) {
    if (item > 7) {
        console.log("index: " + index);
        return item;
    }
    
});
console.log(b); 

