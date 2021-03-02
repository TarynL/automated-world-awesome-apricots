import { celebrity } from "./Celebrities.js";

import { getCelebrity} from "./CelebritiesData.js";

export const celebrityList = () => {
	const allCelebrities = getCelebrity();

	const DOMLocation = document.querySelector("#peopleList");
	let celebrityRep = "";

	for(const thatOneCelebrity of allCelebrities){
		celebrityRep += celebrity(thatOneCelebrity);
		console.log("celebrityRep", celebrityRep);
	};
	

	DOMLocation.innerHTML = celebrityRep;

 }
 