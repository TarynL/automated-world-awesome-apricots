<<<<<<< HEAD
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
=======


>>>>>>> 22914e18b31e83422a2f0c1909cdbd83f5d45c5a
