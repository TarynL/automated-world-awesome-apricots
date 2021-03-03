export const Landmarks = (LandmarksObj) => {
    return (
        `<article class="landmarks-card">
        <div><img class="landmark-image" src="images/${LandmarksObj.image}"/></div>
            <h3 class="landmark-name">${LandmarksObj.name}</h3>
        </article>`
    )
};