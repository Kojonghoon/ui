//OR 연산자 인 경우

const no= 0
const num= no || 7
//하나라도 true이면 true를 반환하고, 그렇지 않으면 false를 반환

console.log(num);   //7

//Nullish병합 연산자를 이용하면 - 왼쪽부터 비교하는 것은 OR연산자와 동일
//그러나 null, undefined는 건너 뛰고 나머지 데이터 만나면 처음 만나자 마자 반환
const num2 = no ?? 7

console.log(num2);  //0