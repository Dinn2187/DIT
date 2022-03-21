var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];

function arrayToObject (arr) {
    let elObj = new Object();
    if (typeof arr === 'object') {
        for (let i in arr) {
            let el = arrayToObject(arr[i]);
            elObj[i] = el;
        }
    } else {
        elObj = arr;
    }
    return elObj;
}

console.log(arrayToObject(arr));