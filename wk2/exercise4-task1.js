const delayedPromise = num => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        
            resolve(num * num);
        }, num);
    });
}
delayedPromise(5)
    .then(result => console.log(result))