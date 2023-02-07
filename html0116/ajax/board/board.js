//비동기 통신객체 생성해서 담을 변수 선언
let xhrObject = null;//변수선언
//비동기 통신객체 생성하는 함수 구현 -단 리턴예약어가 없어서 반환받을 수 없음
function createRequest() {
    //자바스크립트에도 예외처리가 가능하다
    //NaN undefined null false ''
  try {
    xhrObject = new XMLHttpRequest(); /* constructor */
  } catch (trymicrosoft) {
    try {
      /* MS의 IE사용자 위한 객체 생성 */
      xhrObject = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (error) {
      xhrObject = null;
    }
  }
  if (xhrObject == null) {
    alert('비동기 통신 객체 생성 에러');
  }
} //end of createRequest
//span태그가 가지고 있는 텍스트 노드값을 읽어오기
//<td>100</td>태그이름이 없다 => 속성을 정의못함 ->아이디나 클래스를 정의못함 -> 접근불가함 -> 어떡하지
//해결방법 - 그래서 나는 텍스트노드에 span으로 감싼다.
// document.querrySelector('태그이름')
function getText(el) {
  let text = '';
  if (el != null) {
    if (el.childNodes) {//el null 스킵, undefined '',NaN
      for (let i = 0; i < el.childNodes.length; i++) {//costEI,priceEI
        let childNode = el.childNodes[i];
        //너 텍스트 노드니?
        if (childNode.nodeValue != null) {
          text = text + childNode.nodeValue;//재할당
          console.log(el+''+el.childNodes);
        }
      }
    }
  }
  return text;
}
//기존 TextNode의 값을 다른 문자열로 바꾸기
/***********************************************
   param1 :document.getElementById("boardSold")
   param2 :xhrObject.
   ************************************************/
function replaceText(el, value) {
  if (el != null) {
    clearText(el); //기존에 있던 10을 지워주세요.
    //새로운 텍스트 노드 15를 생성하기
    var newNode = document.createTextNode(value); //15
    //위에서 생성한 텍스트 노드 값을 el에 붙이는 함수 호출하기
    el.appendChild(newNode);
  }
}
//기존 태그안에 문자열 지우는 함수 구현
function clearText(el) {
  if (el != null) {
    if (el.childNodes) {//자스에서는 0이 아닌건 모두 참이다
      for (var i = 0; i < el.childNodes.length; i++) {
        var childNode = el.childNodes[i];
        el.removeChild(childNode);// 해당 EL삭제하기 - API ->직관적이지 않다 -> 유지보수 어렵다 -> 쓰기 싫다.
      }
    }
  }
}
function createRequest2(){
    try {
      xhrObject = new XMLHttpRequest(); //constructor
    } catch (trymicrosoft) {
      try {
        //MSdml IE사용자 위한 객체 생성
        xhrObject = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (error) {
        xhrObject = null;
      }
    }
    if(xhrObject == null){
      alert("비동기 통신 객체 생성 에러");
    }
    return xhrObject;
  }//end of createRequest