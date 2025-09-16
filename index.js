const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

const navigationBar = document.querySelector("nav");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");

  if (offScreenMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
    offScreenMenu.style.overflow = "visible";
    navigationBar.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  } else {
    document.body.style.overflow = "";
    offScreenMenu.style.overflow = "visible";
    navigationBar.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  }
});
