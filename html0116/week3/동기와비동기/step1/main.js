const hap=(x,y)=>{
    setTimeout(()=>{
        return x+y
    },3000)
}

const x = hap(2,3)
console.log("x : "+x);
const y = x
console.log("y : "+y);


/*
const double =(x)=>{
    return x*2
}

const x = double(100)
console.log("x: "+x);
const y=x
console.log("y: "+y);
*/