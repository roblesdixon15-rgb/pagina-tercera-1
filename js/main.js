const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector(".menu");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("abierto");
  btnMenu.classList.toggle("activo");    // anima las rayitas
});

// cerrar el menú al hacer clic en un enlace
document.querySelectorAll(".menu a").forEach(enlace => {
  enlace.addEventListener("click", () => {
    menu.classList.remove("abierto");
    btnMenu.classList.remove("activo");
  });
});


//Accordion functionality 

const titulos = document.querySelectorAll(".accordion .titulo");

titulos.forEach(titulo => {
  titulo.addEventListener("click", () => {
    const item = titulo.parentElement;

    // cerrar los demás (quitar esta línea si se quieren varios abiertos)
    document.querySelectorAll(".accordion .item").forEach(otro => {
      if (otro !== item) otro.classList.remove("activo");
    });

    item.classList.toggle("activo");
  });
});


const servicios = [
  { titulo: "Lavado",   precio: 8000,  img: "./img/img-1.png" },
  { titulo: "Pulido",   precio: 15000, img: "./img/img-2.jpg" },
  { titulo: "Encerado", precio: 12000, img: "./img/img-3.webp" },
  { titulo: "raspado", precio: 20000, img: "./img/img-3.webp" },
  // agrega más objetos hasta tener las seis tarjetas
];

const contenedor = document.querySelector("#cards");

function pintarCards(lista) {
  contenedor.innerHTML = "";           // limpiar antes de dibujar
  lista.forEach(item => {
    const article = document.createElement("article");

    article.classList.add("tarjeta");
    article.innerHTML = `
      <img src="${item.img}" alt="${item.titulo}">
      <h3>${item.titulo}</h3>
      <p>₡${item.precio}</p>
    `;
    contenedor.appendChild(article);
  });
}

if (contenedor) pintarCards(servicios);   // solo en la página que tiene #cards


const form = document.querySelector(".formulario");

if (form) {                          // solo en contacto
  form.addEventListener("submit", (e) => {
                       // detiene el envío
    const nombre = form.nombre.value.trim();
    
    const correo = form.correo.value.trim();
    let errores = [];

    if (nombre === "") errores.push("El nombre es obligatorio.");
    if (!correo.includes("@")) errores.push("El correo no es válido.");

    if (errores.length > 0) {
      e.preventDefault();                       // detiene el envío
      document.querySelector("#mensajes").textContent = errores.join(" ");
    }
  });
}