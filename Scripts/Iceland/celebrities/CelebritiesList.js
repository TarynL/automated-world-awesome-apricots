import { Celebrities } from "./Celebrities.js"
import { getCelebrities } from "./CelebritiesData.js" 

export const CelebritiesList = () => {
    const allCelebrities = getCelebrities();
    const DOMLocation = document.querySelector("#celebrityList");
    let celebRep = "";

    for (const oneCelebrity of allCelebrities) {
        celebRep += Celebrities(oneCelebrity);
        console.log("celebRep", celebRep);
    }

    DOMLocation.innerHTML = celebRep;
};