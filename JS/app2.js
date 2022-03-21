function* chunks(arr, n) {
    for (let i = 0; i < arr.length; i += n) {
      yield arr.slice(i, i + n);
    }
}

  const c = chunks([1,2,3,4,5,6,7,8], 3);
  
  console.log(c.next()); 
  console.log(c.next());
  console.log(c.next()); 
  console.log(c.next());