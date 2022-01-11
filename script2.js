'use strict';

function HouseBuilder(length, width, floors){
    this.length = length;
    this.width = width;
    this.floors = floors;
}
  
const firstHouse = new HouseBuilder(10, 10, 2);
const secondHouse = new HouseBuilder(10, 8, 3);

HouseBuilder.prototype.calcArea = function(){
    const {length, width, floors} = this;
    console.log(`Площадь дома: ${length * width * floors}`);
}

const firstTotalArea = firstHouse.calcArea();
const secondTotalArea = secondHouse.calcArea();
