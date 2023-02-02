//호이스팅 때문에 선언이 끌어올려져서 오류 안남.
//변수 :  특정 테이터 값을 임시로 저장하는 공간
//->특정값을 자주 사용해야 할 때
//->반복적인 구문(값)이 여러코드에 걸쳐서 빈번히 쓰일 때
//변수 선언 방식
//ES5 - var ->호이스팅이슈 발생 hoisting
//ES6[let or const 사용할 것 , arrow function], ES7
//변수 작성시 유의사항
//숫자로 시작 불가, 특수문자(_, $불가), 예약어 불가, 대소문자 구분
const text = "default";   //재할당 불가, 선언과 초기화 따로 작성이 불가함
// text = "hanamon"; //(선언+초기화+할당 된 상태)
console.log(text);  //undefined or null
console.log(text);
console.log(`text의 값은 ${text} 입니다.`);

//고정값 
//let은 변경될 수 있는 값

const 변수명 = "테스트"
console.log(변수명);