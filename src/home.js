let home = () => {
  let homebody = document.createElement("div");
  homebody.setAttribute("id", "home-body");

  let homediv = document.createElement("div");
  homediv.setAttribute("id", "home-div");

  let slogan = document.createElement("h1");
  slogan.innerHTML = "WILLI PUB";
  let andress = document.createElement("h2");
  andress.innerHTML = "Santa Clara 123";
  let btnmenu = document.createElement("div");
  btnmenu.setAttribute("id", "homemenubtn");
  btnmenu.innerHTML = "VIEW MENU";

  homediv.appendChild(slogan);
  homediv.appendChild(andress);
  homediv.appendChild(btnmenu);

  homebody.appendChild(homediv);

  // let div = document.querySelector("#home-div");
  homediv.style.background =
    "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), #f3f3f3 url(../img/home.jpg) no-repeat fixed";
  homediv.style.backgroundPosition = "center";
  homediv.style.border = "1px solid black";

  return homebody;
};

export { home };
