export const Cities = (citiesObj) => {
    return (
        `<article class="cities-card">
        <div><img class="city-image" src="images/${citiesObj.image}"/></div>
            <h3 class="city-name">${citiesObj.name}</h3>
        </article>`
    )
};