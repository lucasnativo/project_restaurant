let menu = () => {
  let body = document.querySelector("body");
  body.style.background = "white";

  let menubody = document.createElement("div");
  menubody.setAttribute("id", "menu-body");

  let menuimg = document.createElement("div");
  menuimg.setAttribute("id", "menuimg");
  menuimg.style.background = "url(../img/coposegarrafas.jpeg) no-repeat";
  menuimg.style.backgroundSize = "cover";
  menuimg.style.backgroundPosition = "center";
  menubody.appendChild(menuimg);

  let menugrid = document.createElement("div");
  menugrid.setAttribute("id", "menugrid");

  let menuObj = [
    { name: "Beer", disc: "This is a good beer", price: "R$10,00" },
    { name: "Burger", disc: "This is a good burger", price: "R$10,00" },
    { name: "Fries", disc: "This is a good fries", price: "R$10,00" },
    { name: "Beer", disc: "This is a good beer", price: "R$10,00" },
    { name: "Burger", disc: "This is a good burger", price: "R$10,00" },
    { name: "Fries", disc: "This is a good fries", price: "R$10,00" },
    { name: "Beer", disc: "This is a good beer", price: "R$10,00" },
    { name: "Burger", disc: "This is a good burger", price: "R$10,00" },
    { name: "Fries", disc: "This is a good fries", price: "R$10,00" },
  ];

  for (let i = 0; i < menuObj.length; i++) {
    let card = document.createElement("div");
    card.setAttribute("id", "card");
    let h2 = document.createElement("h2");
    h2.innerHTML = menuObj[i].name;
    let disc = document.createElement("p");
    disc.innerHTML = menuObj[i].disc;
    let price = document.createElement("p");
    price.innerHTML = menuObj[i].price;
    let img = document.createElement("div");
    img.classList = "visual";
    card.appendChild(h2);
    card.appendChild(disc);
    card.appendChild(price);
    card.appendChild(img);
    menugrid.appendChild(card);
  }

  menubody.appendChild(menugrid);

  return menubody;
};

export { menu };
