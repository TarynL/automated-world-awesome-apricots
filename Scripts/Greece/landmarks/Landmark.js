
export const Landmark = (landmarkObj) => 
{
    return (
        `<article class="landmark-card">
        <div><img class="landmark-image" src="images/${landmarkObj.image}"/></div>
        <h3 class="landmark-name">${landmarkObj.landmarkName}</h3>
        </article>`

    )
}
