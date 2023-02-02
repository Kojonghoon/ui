//null 어떠한 값이 존재하지 않는다.

let age  = null;
console.log(age);

setTimeout(function(){
    age=10
    console.log(age);
},2000)