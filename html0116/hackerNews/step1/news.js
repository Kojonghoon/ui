const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result)) 
  .then((result) => {
  //ul태그를 js를 활용해서 생성하기
    const ul = document.createElement("ul"); //DOM API
    for(let i=0; i<5;i++){//반복문 -20번
        const li = document.createElement("li");//li태그를 5개 생성
        //<li>뉴스제목1</li>
        //<li>뉴스제목2</li>
        //<li>뉴스제목3</li>
        //<li>뉴스제목4</li>
        //<li>뉴스제목5</li>
        console.log(result[i].title);
        li.innerHTML = result[i].title;//해커뉴스에서 반환값으로 제공되는 json에서 title정보를 가져오는 문장
        //for문에서 만들어진 li태그를 ul태그에 넣기
        ul.appendChild(li);
        // console.log(result[i].title);
    } //end of for
    //news.html문서의 body에 정의된 <div id=root)</ul></div>
    document.getElementById("root").appendChild(ul);
})
//에러가 발생되면 그 떄 출력
  .catch((error) => console.log('error', error));
