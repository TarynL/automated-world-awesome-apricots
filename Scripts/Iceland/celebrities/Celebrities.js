export const Celebrities = (celebritiesObj) => {
    return (
        `<article class="celebrities-card">
        <div><img class="celeb-image" src="images/${celebritiesObj.image}"/></div>
            <li class="celebrity-name">${celebritiesObj.name}</li>
        </article>`
    )
};