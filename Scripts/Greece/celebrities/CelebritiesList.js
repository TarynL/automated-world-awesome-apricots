import {Celebrities} from "./Celebrities.js"

import {getCeleb} from "./CelebritiesData.js";

export const celebList = () => {
    const allCelebs = getCeleb();
    const DOMLocation = document.querySelector("#celebList");
    let celebRep = "";

    for (const oneCeleb of allCelebs){
        celebRep += Celebrities(oneCeleb);
    
    }

    DOMLocation.innerHTML = celebRep;
}

