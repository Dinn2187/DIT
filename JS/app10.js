function NotificationException() {}
function ErrorException() {}
function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if(rand > 0.85) {
    throw new ErrorException()
  } else {
    throw new NotificationException()
  }
}

function reliableMultiply(a, b) {
    let res;
    while (res === undefined) {
       try {
          res = primitiveMultiply(a, b);
       } catch (e) {
           if (e instanceof ErrorException) throw e;
       }
    } 
    return res;
}

console.log(reliableMultiply(8, 8));
  