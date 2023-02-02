let colors = ['red', 'green', 'blue']    //리터럴을 이요한 배열 선언 및 초기화

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach

colors.map(function(color,index,items){ //3번 반복
    console.log(index);//0     -      1     -   2
    console.log(color); //red - green - blue
    console.log(items);//['red', 'green', 'blue'] - ['red', 'green', 'blue'] - ['red', 'green', 'blue']
});