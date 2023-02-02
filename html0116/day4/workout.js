const user =document.querySelector('.user_input');
const btnAdd = document.querySelector(".btn_add");
/* 시스템에서 이벤트 감지 되었을 때 - 너가 버튼을 누르면 */
btnAdd.addEventListener('click',function(e){/*   callback 함수 */
    console.log("plus버튼 호출");
    addRow();
});


user.addEventListener('keypress',(e)=>{
    console.log('key==>'+e.key);
    //==값만 같은지 비교함
    //===타입도 같고 갑도 같은지 비교함 - 자바없음
    if(e.key==='Enter'){
        console.log("Enter이벤트 호출 선공")
        addRow();
    }
});

function addRow(){
    //사용자가 입력한 운동명을 받아옴
    const workName =  user.value;
    console.log(`사용자가 입력한 값 =>${workName}`);
    if(workName===""){
        user.focus();   /* 커서의 위치를 input type = text로 가져옴 */
        return; /* addrow탈출 */
    }
    /* 위 조건을 수렴하지 않으면 input text를 초기화 한다 */
    user.value = "";
    user.focus(); /* 커서 깜박임 */
}