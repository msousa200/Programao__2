import Vehicle from "./Vehicle.js"

export default class Car extends Vehicle{
    
    constructor(data){
        super(data);

        
        console.log(this.brand,this.speed);
    }
}