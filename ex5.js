
const obj={
    a:1,
    print1:function(){
        console.log(this.a);

        let self = this;

        function print2(){
            console.log(self.a);
        }
        print2();
    }



}

obj.print1();

