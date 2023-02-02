//객체

function Student(){
    this.name ='강감찬'
    this.age = 56
}

const student = new Student();
console.log(student);
console.log(student.name);
console.log(student['name']);