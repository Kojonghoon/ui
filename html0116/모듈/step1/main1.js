import number,{Sonata} from './module1.js'
import {insa,names,hap} from './module1.js'

console.log(number);
console.log(insa);
console.log(names);
console.log(hap);

const myCar=new Sonata()
console.log(myCar.wheelNum);
console.log(myCar.speed)
myCar.speedUp();
myCar.speedUp();
myCar.speedUp();
myCar.speedUp();
console.log(`현재 소나타의 속도는 ${myCar.speed}`);
