

var myMethod = function(){
    console.log(this.a);
}
   

var obj1 = {
    a: 'obj1',
    myMethod: myMethod,   
}

var obj2 = {
    a: 'obj2',
    myMethod: myMethod,
}


//Explict   bindnig
myMethod.apply(obj1, [1,2]);
myMethod.call(obj2,1,2);

//Implicit binding
obj1.myMethod(1,2);
obj2.myMethod(1,2);

console.log("obj1.myMethod ?");
obj1.myMethod.apply(obj2, [1,2]);


//hard bindig
myMethod = myMethod.bind(obj1); 
myMethod(1,2);
myMethod(obj2,1,2);