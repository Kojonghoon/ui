const ajax = new XMLHttpRequest();
let content = "";
const key = "AIzaSyD1b-NgIXspzZMnIUfWdZEbx7l0woH9SBw";
const MOST_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&key=${key}`;

ajax.open("GET", MOST_URL, false);
ajax.send();

const most = JSON.parse(ajax.response);
const items = most.items;
console.log(items);
console.log(items.length); //25
content += `<ul class ="videos">`;
for (let i = 0; i < items.length; i++) {
  //25번 반복 - 25개의 li
    content += `<li class="container">`;
    content += `<div class="video">`;
    content += `<img class ="thumbnail" src='${items[i].snippet.thumbnails.medium.url}'/>`;
    content += `<div>`;
    content += `<p class = "title">${items[i].snippet.title}</p>`;
    content += `<p class = "channelTitle">${items[i].snippet.channelTitle}</p>`;
    content += `</div>`;
    content += `</div>`;
    content += `</li>`;
  // console.log(items[i].snippet.thumbnails.medium.url);
  // console.log("내용:" + items[i].snippet.description);
  // console.log("제목:" + items[i].snippet.title);
}
content += `</ul>`;

document.querySelector("#root").innerHTML = content;
