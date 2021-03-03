import {Landmark} from "./Landmark.js"

import {getLandmark} from "./LandmarkData.js";

export const landmarkList = () => {
    const allLandmarks = getLandmark();
    const DOMLocation = document.querySelector("#landmarkList");
    let landmarkRep = "";

    for (const oneLandmark of allLandmarks){
        landmarkRep += Landmark(oneLandmark);
    
    }

    DOMLocation.innerHTML = landmarkRep;
}

