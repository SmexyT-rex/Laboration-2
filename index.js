const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");

  if (offScreenMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
    offScreenMenu.style.overflow = "visible";
  } else {
    document.body.style.overflow = "";
    offScreenMenu.style.overflow = "visible";
  }
});
