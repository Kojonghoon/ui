const obj ={
    a:1,
    b:2,
    c:3,
    e:null,
};
//구조분해 시 같은 변수를 사용 불가
const{a, b}=obj;
console.log(a);     //1
console.log(b);     //2
// console.log(e);     //undefined
const{c}=obj
console.log(c);     //3
//초기화도 가능하다. - 구조분해 할당 시
const{e = 5} = obj;
const{y = 5} = obj;
console.log(e);     //null
console.log(y);     //obj에 y가 없으니 15번 초기화 된 값이 출력


const arr =[1,2,3,4,5]
const[i, j, ... rest]=arr
const[i2, j2, ... abc]=arr
console.log(i);     //1
console.log(j);     //2
console.log(rest);  //[ 3, 4, 5 ]
console.log(abc);   //[ 3, 4, 5 ]