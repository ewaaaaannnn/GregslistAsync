import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";

class HouseService {


  async fetchHouse() {

    const response = await api.get('api/houses')
    console.log('🚙📡', response.data);
    const houses = response.data.map(houseData => new House(houseData))
    console.log('🚙✨', houses);
    AppState.houses = houses
    console.log(AppState.houses);
  }
}


export const houseService = new HouseService()