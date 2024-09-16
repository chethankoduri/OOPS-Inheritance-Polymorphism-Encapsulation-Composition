import Cat from "./Cat";

class Cheetah extends Cat{

    constructor(){
        super();
    }
foodHabits = ()=>{
    console.log("Hunt deer and eat meat");
};
sleepingHabits = ()=>{
    console.log("sleep in caves");
};
facingHuman = ()=>{
    console.log("human run away");
};

calculateResult = ()=> {
    console.log("0 parameters");
};
calculateResult = (a)=> {
    console.log("1 parameters");
};
calculateResult = (a,b)=> {
    console.log("2 parameters");
};
calculateResult = (a,b,c)=> {
    console.log("3 parameters");
};

}
export default Cheetah;