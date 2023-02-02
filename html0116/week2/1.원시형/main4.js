//undefined - 기본적으로 갖는 값 - 값이 할당 되지 않는 상태



let age = undefined;

console.log(age);


setTimeout(function(){  //콜백
    age = 10
    console.log(age);
}, 2000)    //밀리세크 단위임

