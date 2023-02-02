//객체데이터
//var -호이스팅 이슈인해서 사용불가
//const  - 상수 - 재할당 불가
//let - 변하는 값 관리
//

const student ={
    name : '이순신',
    age : 45,
    tel : null,
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student['name']);
console.log(student.tel);
console.log(student.email); //없는 속성을 출력하려고 하면 undefineded 출력

//배열 , Json

/*
    자료형(Data Type)
    자료형의 종류
    1. 원시형 자료(primative type) : 특정 값이 메모리에 저장(값만)
    -문자형([Object String]) slice(8,-1)
    -숫자형(Number)
    -논리형(Boolean : true, false)
    -undefined : 변수를 선언하고 그 값을 초기화 하지 않으면 undefined저장됨(에러 원인되니까)
    2. 참조형 자료 ( reference type)
    : 값이 위차하고 있는 참조 주소값만 메모리에 저장(관련된 내장함수까지 같이 참조됨:기억)
        -null(Object) :  명시적으로 특정 변수의 값을 비워둘 때
        const myCar;
        const myCar = new Car()
        -array(Object) : 연관된 값들을 그룹으로 묶어서 관리함 - []
        -객체 - {} : Object데이터를 Key라는 인덴싱을 통해 자료를 구조적을 묶어 놓은 형태
        
 */