let addToy = false;

document.addEventListener("DOMContentLoaded", () => {

  const url = `http://localhost:3000/toys`
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  // const toyCollection = document.querySelector('#toy-collection')

  // console.log(toyCollection)
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy; 
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
    

    function renderAllToys(){
      fetch(url)
    .then(response => response.json())
    .then(data => {
      const toy = data.forEach(toy => renderOneCard(toy))
    })
    
    renderAllToys()
    function renderOneCard(toy){
      const card = document.createElement('div')
      card.className = 'card'
      card.dataset.id = toy.id 
    
      card.innerHTML = `
      <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar" />
      <p> ${toy.likes} Likes </p>
      <button class="like-btn">Like <3</button>
    </div>`
     
    const toyCollection = document.querySelector('#toy-collection')
      toyCollection.append(card)
    
    }
  }); 
});
