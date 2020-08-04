let tabs = () => {
  let nav = document.createElement("nav");
  nav.setAttribute("id", "top-bar");

  let barlogo = document.createElement("div");
  barlogo.setAttribute("id", "bar-logo");

  let logo = document.createElement("div");
  logo.setAttribute("id", "logo");
  logo.innerHTML = "Willi Pub";

  barlogo.appendChild(logo);

  let barbtns = document.createElement("div");
  let home = document.createElement("div");
  let menu = document.createElement("div");
  let about = document.createElement("div");
  let contact = document.createElement("div");

  barbtns.setAttribute("id", "bar-btns");
  home.setAttribute("id", "home");
  menu.setAttribute("id", "menu");
  about.setAttribute("id", "about");
  contact.setAttribute("id", "contact");

  home.innerHTML = "Home";
  menu.innerHTML = "Menu";
  about.innerHTML = "About";
  contact.innerHTML = "Contact";

  barbtns.appendChild(home);
  barbtns.appendChild(menu);
  barbtns.appendChild(about);
  barbtns.appendChild(contact);

  nav.appendChild(barlogo);
  nav.appendChild(barbtns);

  return nav;
};

export { tabs };
