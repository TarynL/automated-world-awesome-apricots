
import { celeb } from "./Celebrities.js";
import { getCelebs } from "./CelebritiesData.js";

export const celebList = () => {

    const allCelebs = getCelebs();

    const DOMLocation = document.querySelector("#celebName");

    let celebHTMLRepresentations = "";

    for (const oneCeleb of allCelebs) {
        celebHTMLRepresentations += celeb(oneCeleb);
    }
	
console.log("Celeb List", celebHTMLRepresentations);


DOMLocation.innerHTML = celebHTMLRepresentations;

}
