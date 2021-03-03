
export const Celebrities = (celebObj) => 
{
    return (
        `<article class="celeb-card">
        <div><img class="celeb-image" src="images/${celebObj.image}"/></div>
       <li class="celeb-name">${celebObj.celebName}</li>
        
        </article>`

    )
}

