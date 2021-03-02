import { landmark } from "./Landmark.js";

import { getLandmark} from "./LandmarkData.js";

export const landmarkList = () => {
	const allLandmarks = getLandmark();

	const DOMLocation = document.querySelector("#landmarkList");
	let landmarkRep = "";

	for(const thatOneLandmark of allLandmarks){
		landmarkRep += landmark(thatOneLandmark);
		console.log("landmarkRep", landmarkRep);
	};
	

	DOMLocation.innerHTML = landmarkRep;

 }
 