async function asyncPromise(num) {
    var result = await new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(num * num);
        }, num);
    });
    return result
}
asyncPromise(6)
.then(result => console.log(result))