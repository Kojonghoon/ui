function func1(){   //이름이 있는 함수임
    console.log('func1');
    func2(func1)
}

func1()

function func2(func1){
    console.log(func1);
}