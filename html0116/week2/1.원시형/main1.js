//변수 선언시 var는 사용하지 않음 - 호이스팅 떄문
// const - 재할당 불가

const num =5;//선언과 초기화


const num2 =1;

console.log(num+1);//6
console.log(num+num2);//6
console.log(num+null);//5
console.log(num+undefined);//5