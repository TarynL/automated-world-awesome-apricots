import { landmark } from "./Landmark.js";
import { getLandmarks } from "./LandmarkData.js";

export const landmarkList = () => {

    const allLandmarks = getLandmarks();

    const DOMLocation = document.querySelector("#landmarkName");

    let landmarkHTMLRepresentations = "";

    for (const oneLandmark of allLandmarks) {
        landmarkHTMLRepresentations += landmark(oneLandmark);
    }
	
console.log("Landmark List", landmarkHTMLRepresentations);


DOMLocation.innerHTML = landmarkHTMLRepresentations;

}
