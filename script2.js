'use strict';

class House {
    constructor(length, width, floors) {
      this.length = length;
      this.width = width;
      this.floors = floors;
    }

    static sortBuyFloors(skyscraperA, skyscraperB) {
        return skyscraperA.floors - skyscraperB.floors;
      }
  }
  
class Skyscraper extends House { 
    constructor(length, width, floors, offices) {
      super(length, width, floors);
      this.offices = offices;
    }
  }
  
const firstSkyscraper = new Skyscraper(30, 20, 55, 100);
const secondSkyscraper = new Skyscraper(25, 25, 40, 120);
const thirdSkyscraper = new Skyscraper(30, 30, 45, 150);

const skyscrapers = [firstSkyscraper, secondSkyscraper, thirdSkyscraper];

skyscrapers.sort(House.sortBuyFloors);

