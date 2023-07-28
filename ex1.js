//"use strict";
//define a function

var myFunction = function(){
    console.log(this);
}

//call the function
//myFunction();

var myObject = {
    myMethod:function(){
        console.log(this);
    }
}


//myObject.myMethod();


var myMethod = function(){
    console.log(this);
}

var myObject = {
    myMethod: myMethod
}

myObject.myMethod();  //this === myObject
myMethod();   //this === window