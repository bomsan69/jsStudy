function clouserEx(){

    let a = 10;

    return function(b){

        a= a+b;

        console.log(a);

        return a;
        
    }
}

const fn1 = clouserEx();
fn1(10);
fn1(10);
fn1(10);

const fn2 = clouserEx();
fn2(10);

console.log(typeof fn1);
