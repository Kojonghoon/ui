let colors = ['red', 'green', 'blue']    //리터럴을 이요한 배열 선언 및 초기화

for(color in colors){
    console.log(color,  ', color : ', colors[color] );
}
for(color in colors){
    console.log(' color : ' +  colors);
}

let items = [
    { id: 1, name: "벤츠프레스", count: 0 },
    { id: 2, name: "렛풀다운", count: 0 },
    { id: 3, name: "스쿼트", count: 0 },
];

for(let item of items){
    console.log(item.id + item.name + item.count);
}

const student={
    name: '이순신',
    age:45,
    address : '대전'
}

for(let key in student){
    console.log(key, ",", student[key]);
    console.log(key, "+", student[key]);
}
