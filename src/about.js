let about = () => {
  let aboutbody = document.createElement("div");
  aboutbody.setAttribute("id", "about-body");

  let aboutimg = document.createElement("div");
  aboutimg.setAttribute("id", "aboutimg");
  aboutimg.style.background = "url(../img/banner.jpeg) no-repeat";
  aboutimg.style.backgroundSize = "cover";
  aboutimg.style.backgroundPosition = "center";

  let aboutcontent = document.createElement("div");
  aboutcontent.setAttribute("id", "about-content");

  let abouth2 = document.createElement("h2");
  abouth2.setAttribute("id", "about-h2");
  abouth2.innerHTML = "About Us";

  let aboutp = document.createElement("p");
  aboutp.setAttribute("id", "about-p");
  aboutp.innerHTML =
    "Vivamus a nisl at ipsum tempor feugiat sit amet ac diam. In mollis tellus id pharetra feugiat. Donec vulputate ante ut leo pellentesque lacinia. Duis maximus congue tellus quis lacinia. Quisque ac odio magna. Vivamus tempus lacus sed vulputate viverra. Curabitur finibus eleifend lacus, non porttitor purus posuere et. Integer sit amet dictum lorem, nec varius tortor.";

  aboutcontent.appendChild(abouth2);
  aboutcontent.appendChild(aboutp);
  aboutbody.appendChild(aboutimg);
  aboutbody.appendChild(aboutcontent);

  let body = document.querySelector("body");
  body.style.background = "white";

  return aboutbody;
};

export { about };
