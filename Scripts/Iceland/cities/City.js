export const Cities = (citiesObj) => {
    return (
        `<article class="cities-card">
        <div><img class="city-image" src="images/${citiesObj.image}"/></div>
            <li class="city-name">${citiesObj.name}</li>
        </article>`
    )
};