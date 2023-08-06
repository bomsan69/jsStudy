
console.log("start");

function callbakTest(a, cb){

    setTimeout(function(){
        cb("callback:" + a)
    },3000)


}



function promiseTest(a){
    return new Promise(function(resolve, reject){

        fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(json => resolve(json))
       
    })
}


callbakTest(10, function(a){
    console.log(a)
})

promiseTest(10).then(function(a){
    console.log(a)
})





console.log("end")