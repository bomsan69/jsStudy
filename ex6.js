

function test(a){

    console.log(a);

}

//test(1);
console.log(this);

test.apply(this, [2]);
test.bind(this, 3)();