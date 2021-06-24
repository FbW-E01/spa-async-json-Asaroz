
import '../styles/main.scss';
import data from "./data.js"

const dataObj = JSON.parse(data)

const cakes = document.querySelector("#cakes")
const biscuits = document.getElementById("biscuits")
const bread = document.getElementById("bread")


dataObj.cakes.forEach(e => {
    buildCard(e,cakes)
});
dataObj.biscuits.forEach(e => {
    buildCard(e,biscuits)
});
dataObj.bread.forEach(e => {
    buildCard(e,bread)
});

function buildCard(e,target){
    const card = document.createElement("div")
    card.style.width="18rem"
    card.classList.add("card")

    const img = document.createElement("img")
    img.src = e.image
    card.style.marginLeft =" 50px"
    card.style.marginBottom="30px"
    img.classList.add("card-img-top")

    const body = document.createElement("div")
    body.classList.add("card-body")

    const title = document.createElement("h5")
    title.classList.add("card-title")
    title.innerText=e.title

    const author = document.createElement("p")
    author.classList.add("card-text")
    author.innerText= e.author

    const line = document.createElement("hr")

    const ingrediants = document.createElement("p")
    ingrediants.innerText= "Ingredients:"
     e.ingredients.forEach(items=>{
         ingrediants.innerText = ingrediants.innerText +","+ items
     })
    
    card.appendChild(img)
    card.appendChild(body)
    body.appendChild(title)
    body.appendChild(author)
    body.appendChild(line)
    body.appendChild(ingrediants)


    target.appendChild(card)

}


