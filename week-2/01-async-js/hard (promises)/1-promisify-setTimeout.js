/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
let t = n*1000;
return new Promise(function(resolve){
    setTimeout(function(){
        resolve();
    },t);
});

}

module.exports = wait;



