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

  return homebody;
};

export { home };
