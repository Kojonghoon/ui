const lis = document.querySelectorAll('ul li')  // 같은 이름이면 브라우저가 자동으로 배열전환


//호이스팅이 발생해서 모두 3만 출력됨
//for문 안에서만 유지가 되어야 하는데 밖에서도 유지됨
for(var x=0;x<lis.length;x++){
    ((index)=>{
        lis[x].addEventListener('click',function(){
            console.log(index); //3 3 3
        })
    }
    )(x)
}//end of for


for(let x=0;x<lis.length;x++){
    lis[x].addEventListener('click',function(){
        console.log(x); //0 1 2
    });
}