//변수 선언시 var는 사용하지 않음 - 호이스팅 떄문
// const - 재할당 불가


const num = 5;  //선언과 초기화
const pi = 3.14;
//num=1; 재할당 불가

let no =3;
no=6;

console.log(num);
console.log(no);
//typeof는 타입을 판별하는 연산자
console.log(typeof pi);
//NaN ->Not a Number - 숫자로 표시 할 수 없읍
console.log(typeof(num+undefined));