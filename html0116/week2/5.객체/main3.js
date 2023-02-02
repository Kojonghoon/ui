//객체

const studentA={
    name : '나신입',
    age:31
}
const studentB={
    name : '나초보',
    age:29,
    parent:studentA
}

console.log(studentA);
console.log(studentB);

const students = [studentA, studentB]

console.log(students[0]);
console.log(students[1]);
console.log(students[0].name);
console.log(students[0].age);
console.log(students[1]['parent']['name']);