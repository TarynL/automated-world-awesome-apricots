import { Landmarks } from "./Landmark.js"
import { getLandmarks } from "./LandmarkData.js" 

export const LandmarksList = () => {
    const allLandmarks = getLandmarks();
    const DOMLocation = document.querySelector("#landmarksList");
    let landmarkRep = "";

    for (const oneLandmark of allLandmarks) {
        landmarkRep += Landmarks(oneLandmark);
        console.log("landmarkRep", landmarkRep);
    }

    DOMLocation.innerHTML = landmarkRep;
};