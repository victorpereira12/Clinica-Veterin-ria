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
