
console.log("start");

function callbakTest(a, cb){

    setTimeout(function(){
        cb("callback:" + a)
    },3000)


}

setTimeout(function(){
    console.log("setTimeout")
},1000);


function promiseTest(a){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('promise:'+a ) 
        },3000)
    })
}

promiseTest(10).then(function(a){
    console.log(a)
})

callbakTest(10, function(a){
    console.log(a)
})




console.log("end")