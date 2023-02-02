//Array - 구조분해 할당 문법
// 배열요소

const colors=["red","green", "blue"];
const copy = [];


['red','green','blue'].forEach(color=>{
copy.push(color)
});

console.log(copy);