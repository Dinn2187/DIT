function deepEqual(obj1, obj2) {
    const prop1 = Object.getOwnPropertyNames(obj1);
    const prop2 = Object.getOwnPropertyNames(obj2);
  
    if (prop1.length !== prop2.length) {
      return false;
    }
  
    for (let i = 0; i < prop1.length; i++) {
      const prop = prop1[i];
      const bothAreObjects = typeof(obj1[prop]) === 'object' && typeof(obj2[prop]) === 'object';
  
      if ((!bothAreObjects && (obj1[prop] !== obj2[prop])) || (bothAreObjects && !deepEqual(obj1[prop], obj2[prop]))) {
        return false;
      }
    }
    return true;
}

console.log(deepEqual({name: 'test'}, {name: 'test', age: 10}));

