
import { city } from "./City.js";
import { getCities } from "./CityData.js";

export const cityList = () => {

    const allCities = getCities();

    const DOMLocation = document.querySelector("#cityName");

    let cityHTMLRepresentations = "";

    for (const oneCity of allCities) {
        cityHTMLRepresentations += city(oneCity);
    }
	
console.log("City List", cityHTMLRepresentations);


DOMLocation.innerHTML = cityHTMLRepresentations;
}