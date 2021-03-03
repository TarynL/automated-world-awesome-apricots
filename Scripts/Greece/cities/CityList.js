import { City } from "./City.js"

import {getCity} from "./CityData.js";

export const cityList = () => {
    const allCities = getCity();
    const DOMLocation = document.querySelector("#cityList");
    let cityRep = "";

    for (const oneCity of allCities){
        cityRep += City(oneCity);
    
    }

    DOMLocation.innerHTML = cityRep;
}

