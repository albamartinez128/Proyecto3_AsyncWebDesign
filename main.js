import "./style.css";
import { navbar } from "./Components/navbar.js";
import { image } from "./Components/image.js";
import { container } from "./Components/container.js";
import { getImages } from "./Utils/getimages";

var tarjetaImagenes = ""; //Guardamos imagenes unsplash URL
document.querySelector("#app").innerHTML += navbar();
document.querySelector("#app").innerHTML += container(tarjetaImagenes);

//Evento para que aparezcan las imagenes al entrar en la web//

document.addEventListener("DOMContentLoaded", (event) => {
  getImages("flores").then((data) => {
    data.forEach((imagen) => {
      tarjetaImagenes += image(imagen.urls.regular);
    });
    document.querySelector(".container").innerHTML = container(tarjetaImagenes);
  });
});

/*Hacemos click a la lupa para que salgan nuestras imagenes*/
document.querySelector("#event_search").addEventListener("click", () => {
  const inputValue = document.querySelector(".search").value;
  tarjetaImagenes = "";
  getImages(inputValue).then((data) => {
    console.log("imagenes", data);
    if (data.length === 0) {
      document.querySelector(".container").innerHTML =
        "No se han encontrado resultados...";
    } else {
      data.forEach((imagen) => {
        tarjetaImagenes += image(imagen.urls.regular);
      });
      document.querySelector(".container").innerHTML =
        container(tarjetaImagenes);
    }
  });
});
