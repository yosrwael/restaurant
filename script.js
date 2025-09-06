let pasta = [
  { imagePath: "imgs/pasta1.jpg", name: "Pasta", price: "25$" },
  { imagePath: "imgs/pasta2.jpg", name: "Pasta", price: "20$" },
  { imagePath: "imgs/pasta5.jpg", name: "Pasta", price: "22$" },
  { imagePath: "imgs/pasta6.jpg", name: "Pasta", price: "27$" },
];

let pizza = [
  { imagePath: "imgs/pizza-1.jpg", name: "Pizza", price: "15$" },
  { imagePath: "imgs/pizza8.jpg", name: "Pizza", price: "12$" },
  { imagePath: "imgs/pizza-2.jpg", name: "Pizza", price: "12$" },
  { imagePath: "imgs/pizza-7.jpg", name: "Pizza", price: "17$" },
];

let steak = [
  { imagePath: "imgs/res_img_4.jpg", name: "Steak", price: "15$" },
  { imagePath: "imgs/blog-img-3.jpg", name: "Steak", price: "25$" },
  { imagePath: "imgs/blog-img-4.jpg", name: "Steak", price: "20$" },
  { imagePath: "imgs/res_img_8.jpg", name: "Steak", price: "30$" },
  { imagePath: "imgs/blog-bg.jpg", name: "Steak", price: "25$" },
];

let drinks = [
  { imagePath: "imgs/res_img_7.jpg", name: "Drink", price: "15$" },
  { imagePath: "imgs/res_img_6.jpg", name: "Drink", price: "10$" },
  { imagePath: "imgs/res_img_5.jpg", name: "Drink", price: "7$" },
];

let allItems = [...pasta, ...pizza, ...steak, ...drinks];

let cartCount = 0;

function addToCart(itemName, price) {
  cartCount++;
  document.getElementById("cartCount").innerText = cartCount;
  console.log(itemName + " added to cart. Price: " + price);
}

function returnItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${item.imagePath}" alt="${item.name}" />
        <div class="card-body">
          <h5 class="card-title">${item.name} ${item.price}</h5>
          <button class="btn">Add To Cart</button>
        </div>
      `;
    card.querySelector(".btn").addEventListener("click", () => {
      addToCart(item.name, item.price);
    });

    container.appendChild(card);
  });
}

returnItems(allItems);
document.querySelector(".allbtn").addEventListener("click", () => returnItems(allItems));
document.querySelector(".pastasbtn").addEventListener("click", () => returnItems(pasta));
document.querySelector(".pizzasbtn").addEventListener("click", () => returnItems(pizza));
document.querySelector(".steakbtn").addEventListener("click", () => returnItems(steak));
document.querySelector(".drinksbtn").addEventListener("click", () => returnItems(drinks));
