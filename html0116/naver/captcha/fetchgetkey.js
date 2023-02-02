const myHeaders = new Headers();
myHeaders.append("X-Naver-Client-Id", "OFeRHczJ6ofre7yoyJQG");
myHeaders.append("X-Naver-Client-Secret", "MD_hsNsbJz");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://openapi.naver.com/v1/captcha/nkey?code=0", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result.key);

    })
    .catch(error => console.log('error', error));