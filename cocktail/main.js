const div = document.querySelector(".drink");
const next = document.querySelector(".next");
const back = document.querySelector(".back");

next.addEventListener("click", getDrink);

async function getDrink() {
  let url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  let res = await fetch(url);
  let data = await res.json();
  displayData(data.drinks[0]);
}

function displayData(drink) {
  while (div.firstElementChild) {
    div.removeChild(div.firstElementChild);
  }
  let name = document.createElement("h1");
  name.textContent = drink.strDrink;
  div.appendChild(name);

  let img = document.createElement("img");
  img.src = drink.strDrinkThumb;
  div.appendChild(img);

  let blurb = document.createElement("p");
  blurb.textContent = drink.strInstructions;
  div.appendChild(blurb);

  for (let i = 1; i <= 15; i++) {
    if (drink[`strIngredient${i}`]) {
      let ingredient = document.createElement("p");
      ingredient.textContent = `${drink["strIngredient" + i]}: ${
        drink["strMeasure" + i]
      }`;
      div.appendChild(ingredient);
    }
  }
}

window.addEventListener("load", () => {
  getDrink();
  setInterval(() => {
    getDrink();
  }, 10000);
});
