
/* VARIABLES */

let addToy = false;
const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
const toyForm = toyFormContainer.querySelector(".add-toy-form")
const url = `http://localhost:3000/toys`
const toyCollection = document.querySelector('#toy-collection')
// const likeBtn = document.getElementsByClassName('like-btn')
//   console.log(likeBtn)


/* APP */

document.addEventListener("DOMContentLoaded", () => {
  



  //Once DOM content is loaded, create GET fetch request 
function getAllCards(){
  fetch(url)
  .then(response => response.json())
  .then(toys => {
    const toy = toys.forEach(toy => getCard(toy))
  })
}

  //Invoke fetch function 
  getAllCards()

  // Create getCard function 
  function getCard(toy){ 
      
      const card = document.createElement('div')
      card.className = 'card'
      card.dataset.id = toy.id 

      card.innerHTML = `
      <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar" />
      <p class="react-count"> ${toy.likes} Likes </p>
      <button class="like-btn">Like <3</button>
    </div>`
     
      toyCollection.append(card)
    // console.log(card)
  }


  // Add click event listener for "Add New Toy Button"
  
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  // Add submit event for new toy 
 toyForm.addEventListener("submit", function(event){
  event.preventDefault()
  const name = event.target.name.value
  const image = event.target.image.value
  const toy = {
    name, 
    image, 
    likes: 0
  }
  getCard(toy)
  fetch(url, {
    method: "POST", 
    headers: {
      "Content-Type": 'application/json', 
    }, 
    body: JSON.stringify(toy), 
  }).then(response => response.json())
  .then(newToy => console.log(newToy))

 })

 toyCollection.addEventListener('click', function(event){
   const card = event.target.closest('div.card')
   if (event.target.className === 'like-btn')
   console.log('Like button clicked!!')

   const likesDisplay = card.querySelector('.react-count')
   const likes = parseInt(likesDisplay.textContent)

    fetch(`${url}/${card.dataset.id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({likes: likes + 1})

    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })

    

  //  const likesDisplay = card
  //  console.log(likesDisplay)
  //  const likes = parseInt(likesDisplay)
  //  console.log(likes)
 })
});















 // function renderAllCards(){
    // fetch(url)
    // .then(response => response.json())
    // .then(data => {
    //   const toy = data.forEach(toy => renderOneCard(toy))
    // })
    
    // function renderOneCard(toy){
    //   const card = document.createElement('div')
    //   card.className = 'card'
    //   card.dataset.id = toy.id 
    
    //   card.innerHTML = `<div class="card">
    //   <h2>${toy.name}</h2>
    //   <img src=${toy.image} class="toy-avatar" />
    //   <p>4 ${toy.likes} Likes </p>
    //   <button class="like-btn">Like <3</button>
    // </div>`
    // }
    // function renderOneCard(toy){
    //   const card = document.createElement('div')
    //   card.className = 'card'
    //   card.dataset.id = toy.id 
    
    //   card.innerHTML = `<div class="card">
    //   <h2>${toy.name}</h2>
    //   <img src=${toy.image} class="toy-avatar" />
    //   <p>4 ${toy.likes} Likes </p>
    //   <button class="like-btn">Like <3</button>
    // </div>`
      
    // const toyCollection = document.querySelector('#toy-collection')
    //   toyCollection.append(card)
    // }
  // }); 
  // function renderAllCards(){
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => {
  //     const toy = data.forEach(toy => renderOneCard(toy))
  //   })

  // function renderOneCard(toy){
  //   const card = document.createElement('div')
  //   card.className = 'card'
  //   card.dataset.id = toy.id 
  
  //   card.innerHTML = `<div class="card">
  //   <h2>${toy.name}</h2>
  //   <img src=${toy.image} class="toy-avatar" />
  //   <p>4 ${toy.likes} Likes </p>
  //   <button class="like-btn">Like <3</button>
  // </div>`
  // }
