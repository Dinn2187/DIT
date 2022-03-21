function isObj(value) {
    if (value instanceof Array) {
        return false;
    } else {
        return (value !== null) && (typeof(value) == 'object');
    }
}


function objectToArray(obj) {
    let arr = [], array = [], tempObj;
    for (let key in obj) {
        
        tempObj = obj[key];

        if (isObj(obj[key])) {
            tempObj = objectToArray(obj[key]);
        }
        array[key] = tempObj;
        
    }
    arr.push(array);
    for (let i = 0; i < arr.length; i++) {
        return arr;
    }
}

console.log(objectToArray({
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
}));