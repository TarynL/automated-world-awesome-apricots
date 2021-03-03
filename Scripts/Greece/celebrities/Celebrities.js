
export const Celebrities = (celebObj) => 
{
    return (
        `<article class="celeb-card">
        <div><img class="celeb-image" src="images/${celebObj.image}"/></div>
       <h4 class="celeb-name">${celebObj.celebName}</h4>
        </article>`

    )
}

