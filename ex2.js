const list = new Array(1,2,3,4,5,6,7,8,9,10);

console.log(list);

let new_list=[];

 list.forEach(function(item,index){
     console.log(index)
     if(index < 5) {
        new_list.push(item*2);
     }
    

 })

 console.log("new_list",new_list);

 let new_list2=[];
for (let index = 0; index < list.length; index++) {

    if(index > 4) {
        break;
    }
    
    const element = list[index];
    console.log(element)
    
    new_list2.push(element*2);

    
   
    
}

console.log("new_list2",new_list2);

