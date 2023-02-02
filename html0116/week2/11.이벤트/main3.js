const a = document.querySelector("a")

a.addEventListener('click', (event)=>{
    event.preventDefault();
});
// a.addEventListener('click', function(event){
    // })
    
    const box = document.querySelector(".box")

    box.addEventListener('mousemove',(event)=>{
        console.log(event);
        console.log(`현재 x축 위치 ${event.pageX}`);
        console.log(`현재 y축 위치 ${event.pageY}`);
    });

    window.addEventListener("mousewheel",(e)=>{
        console.log(e);
        if(e.deltaY>0)
            console.log('wheeldown');
        if(e.deltaY<0)
        console.log('wheelup');
    });