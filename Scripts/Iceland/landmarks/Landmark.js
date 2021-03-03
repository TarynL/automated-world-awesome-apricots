export const Landmarks = (LandmarksObj) => {
    return (
        `<article class="landmarks-card">
        <div><img class="landmark-image" src="images/${LandmarksObj.image}"/></div>
            <li class="landmark-name">${LandmarksObj.name}</li>
        </article>`
    )
};