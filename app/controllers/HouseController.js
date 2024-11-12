import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { houseService } from "../services/HouseService.js";

export class HouseController {
  constructor() {
    console.log('house');
    this.fetchHouse()
    AppState.on('houses', this.drawHouses)
  }


  async fetchHouse() {
    try {
      await houseService.fetchHouse()
    } catch (error) {
      console.error(error)
    }
  }


  drawHouses() {
    console.log('✏️🚙');
    const houseListingsElm = document.getElementById('house-listings')
    houseListingsElm.innerHTML = ''
    AppState.houses.forEach(house => houseListingsElm.innerHTML += house.Card)
  }
}