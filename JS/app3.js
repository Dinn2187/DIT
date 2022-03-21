function bulkRun(array) {
    let promises = array.map(e => e[0](...e[1]));
    return Promise.all(promises);
}
 
const f1 = () => 1;
const f2 = (a) => a;
const f3 = (...args) => new Promise(resolve => { setTimeout(resolve, 1000, args) });
 
bulkRun(
    [
        [f1, []],
        [f2, [2]],
        [f3, [3, 4]]
    ]
).then(console.log);