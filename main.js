function openMenu() {
  let mobileMenu = document.querySelector(".navItem-mobile");
  if (mobileMenu.classList.contains("open")) {
    mobileMenu.classList.remove("open");
    document.querySelector(".menuIcon").src = "./assets/menuIcon.png";
  } else {
    mobileMenu.classList.add("open");
    document.querySelector(".menuIcon").src = "./assets/icons8-excluir-50.png";
  }
}

var elementosDuvida = document.querySelectorAll(".questionForm-resposta");

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("active");

    var img = duvida.querySelector("img");
    if (img) {
      if (duvida.classList.contains("active")) {
        img.src = "./assets/new-arrow.png";
      } else {
        img.src = "./assets/arrow.png";
      }
    }
  });
});
