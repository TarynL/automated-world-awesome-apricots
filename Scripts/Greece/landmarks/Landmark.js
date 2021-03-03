
export const Landmark = (landmarkObj) => 
{
    return (
        `<article class="landmark-card">
        <div><img class="landmark-image" src="images/${landmarkObj.image}"/></div>
        <li class="landmark-name">${landmarkObj.landmarkName}</li>
        </article>`

    )
}
