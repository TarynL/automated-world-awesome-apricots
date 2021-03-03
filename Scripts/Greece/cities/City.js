export const City = (cityObj) => 
{
    return (
        `<article class="city-card">
        <div><img class="city-image" src="images/${cityObj.image}"/></div>
        <h3 class="city-name">${cityObj.cityName}</h3>
        </article>`

    )
}
