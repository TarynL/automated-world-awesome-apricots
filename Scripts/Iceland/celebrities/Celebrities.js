export const Celebrities = (celebritiesObj) => {
    return (
        `<article class="celebrities-card">
        <div><img class="celeb-image" src="images/${celebritiesObj.image}"/></div>
            <h3 class="celebrity-name">${celebritiesObj.name}</h3>
        </article>`
    )
};