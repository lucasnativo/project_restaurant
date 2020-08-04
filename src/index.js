import { tabs } from "./tabs";
import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";
import { contact } from "./contact";

function cleanTabView(node) {
  while (node.childNodes.length > 2) {
    node.removeChild(node.lastChild);
  }
}

function menuBtnListiner() {
  let menuBtn = document.querySelector("#home-body #homemenubtn");
  menuBtn.onclick = () => {
    cleanTabView(content);
    content.appendChild(menu());
  };
}

let content = document.querySelector("#content");
content.appendChild(tabs());
content.appendChild(home());
menuBtnListiner();

let logoTab = document.querySelector("#logo");
logoTab.onclick = () => {
  cleanTabView(content);
  content.appendChild(home());
  menuBtnListiner();
};

let homeTab = document.querySelector("#home");
homeTab.onclick = () => {
  cleanTabView(content);
  content.appendChild(home());
  menuBtnListiner();
};

let menuTab = document.querySelector("#menu");
menuTab.onclick = () => {
  cleanTabView(content);
  content.appendChild(menu());
};

let aboutTab = document.querySelector("#about");
aboutTab.onclick = () => {
  cleanTabView(content);
  content.appendChild(about());
};

let contactTab = document.querySelector("#contact");
contactTab.onclick = () => {
  cleanTabView(content);
  content.appendChild(contact());
};
