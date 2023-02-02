//Nullish

console.log(null ?? 1);     //1
console.log(undefined ?? 2);    //2
console.log(undefined ?? null);     //null

console.log(null ??1 ??3);  //1    세번쨰는 있으나 마나 하다.
console.log(false ??1 ??3); //false
console.log(0 ??1 ??3); //0