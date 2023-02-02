const fruits =['🍅', '🥝', '🍇']
const fruits2 =['🍉', '🍊', '🍒']

const fruits3 = ['🌻', ... fruits2]

// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])

fruits3.forEach((fruit)=>{
    console.log(fruit);
});

const fruits4 = [...fruits, ...fruits2]

fruits4.forEach(function(fruit, index){
    console.log(`${index}-${fruit}`);
});

const dept={
    dept : 30,
    dname: '개발부',
    loc: '제주'

}

const emp={
    empno : 7566,
    ename : 'scott',
    sal:2500
}

const deptnemp={...dept, ...emp}
console.log(deptnemp);

const emp2 = {...emp, empno:7499, ename:'tiger',sal:3000}
console.log(emp);
console.log(emp2);

let items = [
    { id: 1, name: "벤츠프레스", count: 0 },
    { id: 2, name: "렛풀다운", count: 0 },
    { id: 3, name: "스쿼트", count: 0 },
];

let items2 = [...items]
console.log(items2);

items2 = [...items, { id: 4, name: "벤츠프레스", count: 7}]
console.log(items2);

items2 = [...items, { id: 5, name: "레그프레스"}]
console.log(items2);