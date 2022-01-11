'use strict';

function HouseBuilder(length, width, floors){
  this.length = length;
  this.width = width;
  this.floors = floors;
}

const firstHouse = new HouseBuilder(10, 10, 2);
const secondHouse = new HouseBuilder(10, 8, 3);