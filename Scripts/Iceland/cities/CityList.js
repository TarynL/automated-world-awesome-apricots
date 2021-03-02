import { Cities } from "./City.js"
import { getCities } from "./CityData.js" 

export const CitiesList = () => {
    const allCities = getCities();
    const DOMLocation = document.querySelector("#cityList");
    let cityRep = "";

    for (const oneCity of allCities) {
        cityRep += Cities(oneCity);
        console.log("cityRep", cityRep);
    }

    DOMLocation.innerHTML = cityRep;
};