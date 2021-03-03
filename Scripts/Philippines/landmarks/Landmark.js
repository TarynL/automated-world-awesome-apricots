export const landmark = (landmarkObj) => {
	return (
    
		`<div><img class="landmark-image" src="images/${landmarkObj.image}"/></div>
		<li class="landmarkName">${landmarkObj.landmarkName}</li>`


	)
};