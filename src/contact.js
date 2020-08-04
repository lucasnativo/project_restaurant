let contact = () => {
  let contactbody = document.createElement("div");
  contactbody.setAttribute("id", "contact-body");

  let contactimg = document.createElement("div");
  contactimg.setAttribute("id", "contactimg");
  contactimg.style.background = "url(./img/roda.jpeg) no-repeat";
  contactimg.style.backgroundSize = "cover";
  contactimg.style.backgroundPosition = "center";

  contactbody.appendChild(contactimg);

  let body = document.querySelector("body");
  body.style.background = "white";

  return contactbody;
};

export { contact };
