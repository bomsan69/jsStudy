"use strict";

function foo(something){
    this.a = something;
  
    console.log(this);
    //console.log(this.a);
}

const obj={}

foo.call(obj,2);
var nfoo=foo.bind(obj,2)
nfoo();


