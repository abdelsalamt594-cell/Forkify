let recipesContainer = document.getElementById("recipesContainer");
let btnpizza = document.getElementById("pizza");
let btnburger = document.getElementById("burger");
let btnpasta = document.getElementById("pasta");
let btnsalad = document.getElementById("salad");
let btnchicken = document.getElementById("chicken");
let input = document.getElementById("input-search");
let btnsearch = document.getElementById("btn-search");

function fetchrecipes(food) {
  recipesContainer.innerHTML = `
    <div class = "loader">Loading delicious recipes...🍳
  `;
  fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${food}`)
    .then((responce) => responce.json())
    .then((ressult) => {
      let data = ressult.data.recipes;
      console.log(data);
      recipesContainer.innerHTML = "";
      data.forEach((recipes) => {
        recipesContainer.innerHTML += `
         <div class="recipe-card">
          <img src="${recipes.image_url}" class="recipe-img" alt="">
          <div class="recipe-info">
            <h3 class="recipe-title">${recipes.title}</h3>
            <p class="recipe-publisherf">${recipes.publisher}</p>
          </div>
            <a href="#" target="_blank" class="btn-view">View recipe</a>
         </div>
        `;
      });
    });
}

btnpizza.addEventListener("click", function () {
  fetchrecipes("pizza");
});
btnburger.addEventListener("click", function () {
  fetchrecipes("burger");
});
btnpasta.addEventListener("click", function () {
  fetchrecipes("pasta");
});
btnsalad.addEventListener("click", function () {
  fetchrecipes("salad");
});

btnchicken.addEventListener("click", function () {
  fetchrecipes("chicken");
});

btnsearch.addEventListener("click", function () {
  fetchrecipes(input.value);
});
