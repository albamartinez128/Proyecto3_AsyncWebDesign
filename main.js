import "./style.css";
import { navbar } from "./Components/navbar.js";
import { image } from "./Components/image.js";
import { container } from "./Components/container.js";

var tarjetaImagenes; //Guardamos imagenes unsplash URL

var imagenes = [
  "https://unsplash.it/400/400/",
  "https://unsplash.it/600/600/",
  "https://unsplash.it/800/800/",
];
imagenes.forEach((imagen) => {
  tarjetaImagenes += image(imagen);
});
document.querySelector("#app").innerHTML += navbar();
document.querySelector("#app").innerHTML += container(tarjetaImagenes);
