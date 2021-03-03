export const City = (cityObj) => 
{
    return (
        `<article class="city-card">
        <div><img class="city-image" src="images/${cityObj.image}"/></div>
        <li class="city-name">${cityObj.cityName}</li>
        </article>`

    )
}
