let array = [
    [5, 3, 6], 
    [7, 11, 2],
    [15, 9, 4]
   ];

function multiplyOddValues(arr) {
    let minValue = arr[0][0];
    for(i = 0; i < arr.length; i++) {
        for(j = 0; j < arr.length; j++) {
            if(arr[i][j] < minValue)
                minValue = arr[i][j]   
        }
    }

    for(i = 0; i < arr.length; i++) {
        for(j = 0; j < arr.length; j++){
            if(arr[i][j] % 2 !== 0) {
                arr[i][j] *= minValue
            }
        }
    }
    return arr
}

console.log(multiplyOddValues(array));