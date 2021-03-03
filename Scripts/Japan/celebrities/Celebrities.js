export const celeb = (celebObj) => {
    return (
`<div><img class="celeb-image" src="images/${celebObj.image}"/></div>
        <li>${celebObj.celebName}</li>`
    )
}
