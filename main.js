!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let i=()=>{let e=document.createElement("div");e.setAttribute("id","home-body");let t=document.createElement("div");t.setAttribute("id","home-div");let n=document.createElement("h1");n.innerHTML="WILLI PUB";let i=document.createElement("h2");i.innerHTML="Santa Clara 123";let r=document.createElement("div");return r.setAttribute("id","homemenubtn"),r.innerHTML="VIEW MENU",t.appendChild(n),t.appendChild(i),t.appendChild(r),e.appendChild(t),t.style.background="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), #f3f3f3 url(./img/home.jpg) no-repeat fixed",t.style.backgroundPosition="center",t.style.border="1px solid black",e},r=()=>{document.querySelector("body").style.background="white";let e=document.createElement("div");e.setAttribute("id","menu-body");let t=document.createElement("div");t.setAttribute("id","menuimg"),t.style.background="url(./img/coposegarrafas.jpeg) no-repeat",t.style.backgroundSize="cover",t.style.backgroundPosition="center",e.appendChild(t);let n=document.createElement("div");n.setAttribute("id","menugrid");let i=[{name:"Beer",disc:"This is a good beer",price:"R$10,00"},{name:"Burger",disc:"This is a good burger",price:"R$10,00"},{name:"Fries",disc:"This is a good fries",price:"R$10,00"},{name:"Beer",disc:"This is a good beer",price:"R$10,00"},{name:"Burger",disc:"This is a good burger",price:"R$10,00"},{name:"Fries",disc:"This is a good fries",price:"R$10,00"},{name:"Beer",disc:"This is a good beer",price:"R$10,00"},{name:"Burger",disc:"This is a good burger",price:"R$10,00"},{name:"Fries",disc:"This is a good fries",price:"R$10,00"}];for(let e=0;e<i.length;e++){let t=document.createElement("div");t.setAttribute("id","card");let r=document.createElement("h2");r.innerHTML=i[e].name;let d=document.createElement("p");d.innerHTML=i[e].disc;let o=document.createElement("p");o.innerHTML=i[e].price;let u=document.createElement("div");u.classList="visual",t.appendChild(r),t.appendChild(d),t.appendChild(o),t.appendChild(u),n.appendChild(t)}return e.appendChild(n),e};function d(e){for(;e.childNodes.length>2;)e.removeChild(e.lastChild)}function o(){document.querySelector("#home-body #homemenubtn").onclick=()=>{d(u),u.appendChild(r())}}let u=document.querySelector("#content");u.appendChild((()=>{let e=document.createElement("nav");e.setAttribute("id","top-bar");let t=document.createElement("div");t.setAttribute("id","bar-logo");let n=document.createElement("div");n.setAttribute("id","logo"),n.innerHTML="Willi Pub",t.appendChild(n);let i=document.createElement("div"),r=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div"),u=document.createElement("div");return i.setAttribute("id","bar-btns"),r.setAttribute("id","home"),d.setAttribute("id","menu"),o.setAttribute("id","about"),u.setAttribute("id","contact"),r.innerHTML="Home",d.innerHTML="Menu",o.innerHTML="About",u.innerHTML="Contact",i.appendChild(r),i.appendChild(d),i.appendChild(o),i.appendChild(u),e.appendChild(t),e.appendChild(i),e})()),u.appendChild(i()),o(),document.querySelector("#logo").onclick=()=>{d(u),u.appendChild(i()),o()},document.querySelector("#home").onclick=()=>{d(u),u.appendChild(i()),o()},document.querySelector("#menu").onclick=()=>{d(u),u.appendChild(r())},document.querySelector("#about").onclick=()=>{d(u),u.appendChild((()=>{let e=document.createElement("div");e.setAttribute("id","about-body");let t=document.createElement("div");t.setAttribute("id","aboutimg"),t.style.background="url(./img/banner.jpeg) no-repeat",t.style.backgroundSize="cover",t.style.backgroundPosition="center";let n=document.createElement("div");n.setAttribute("id","about-content");let i=document.createElement("h2");i.setAttribute("id","about-h2"),i.innerHTML="About Us";let r=document.createElement("p");return r.setAttribute("id","about-p"),r.innerHTML="Vivamus a nisl at ipsum tempor feugiat sit amet ac diam. In mollis tellus id pharetra feugiat. Donec vulputate ante ut leo pellentesque lacinia. Duis maximus congue tellus quis lacinia. Quisque ac odio magna. Vivamus tempus lacus sed vulputate viverra. Curabitur finibus eleifend lacus, non porttitor purus posuere et. Integer sit amet dictum lorem, nec varius tortor.",n.appendChild(i),n.appendChild(r),e.appendChild(t),e.appendChild(n),document.querySelector("body").style.background="white",e})())},document.querySelector("#contact").onclick=()=>{d(u),u.appendChild((()=>{let e=document.createElement("div");e.setAttribute("id","contact-body");let t=document.createElement("div");return t.setAttribute("id","contactimg"),t.style.background="url(./img/roda.jpeg) no-repeat",t.style.backgroundSize="cover",t.style.backgroundPosition="center",e.appendChild(t),document.querySelector("body").style.background="white",e})())}}]);