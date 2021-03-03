export const city = (cityObj) => {
	return (
    
		`<div><img class="city-image" src="images/${cityObj.image}"/></div>
		<li class="cityName">${cityObj.cityName}</li>`


	)
};