let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";

String.prototype.removeDuplicate = function() {
    const set = new Set(this.split(' '));
    return [...set].join(' ');
}
console.log(x.removeDuplicate());