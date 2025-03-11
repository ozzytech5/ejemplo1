/* Archivo script.js */
const autos = [
    { modelo: "Auto 1", imagen: "pics/carro1.jpg" },
    { modelo: "Auto 2", imagen: "pics/carro2.jpg" },
    { modelo: "Auto 3", imagen: "pics/carr3.jpg" }
];

const autosContainer = document.getElementById("autos");

autos.forEach(auto => {
    const autoElement = document.createElement("div");
    autoElement.classList.add("auto");
    autoElement.innerHTML = `<img src="${auto.imagen}" alt="${auto.modelo}"><h3>${auto.modelo}</h3>`;
    autosContainer.appendChild(autoElement);
});