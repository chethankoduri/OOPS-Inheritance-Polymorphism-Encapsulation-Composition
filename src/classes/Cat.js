class Cat{

    constructor(){
        this.noOfLegs = 4;
        this.noOfEyes = 2;
        this.noOfTails = 1;
        
        console.log("Inside Cat Constructor");
    }
    foodHabits = ()=>{
        console.log("Cat hunt rats and drink milk");
    }
    sleepingHabits = ()=>{
        console.log("Cat sleep in the corner of the house");
    }
    facingHuman = ()=>{
        console.log("Cat run away from Human");
    }
}
export default Cat;