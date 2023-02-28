//비교

const a = 1;
const b = 2;

console.log(a == b); //false
console.log(a != b); //true

//일치
const x = 1;
const y = 1;
const z = "1";

console.log(x == y); //true
console.log(x == z); //true
console.log(typeof x); //number
console.log(typeof z); //string
//값이 같은지와 타입이까지도 같은 지 비교함
console.log(x === z); //false

console.log(a >= b); //false
console.log(a <= b); //true

console.log(true && false);
console.log(1 && 0);
console.log(1 && 2 && 0);
