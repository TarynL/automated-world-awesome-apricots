import { city } from "./city.js";

import { getCity} from "./cityData.js";

export const cityList = () => {
	const allCity = getCity();

	const DOMLocation = document.querySelector("#cityList");
	let cityRep = "";

	for(const thatOneCity of allCity){
		cityRep += city(thatOneCity);
		console.log("cityRep", cityRep);
	};
	

	DOMLocation.innerHTML = cityRep;

 }
 