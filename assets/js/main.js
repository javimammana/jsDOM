
console.log (arraysPintura);

const contenedorProductos = document.getElementById("contenedorProductos");

for (let element of arraysPintura) {
    let itemPintura = document.createElement ("div");
    itemPintura.innerHTML = `
        <div class="cardPintura m-5">
            <div class="cardImg">
                <img src="${element.imagen}" alt="">
            </div>
            <div class="cardTexto p-2">
                <h5>${element.color}</h5>
                <p>${element.descripcion}</p>
                <div class="cardCosto d-flex justify-content-between">
                    <h5 class="ms-3">${element.litros} Lts</h5>
                    <h4>$${element.precio}</h4>
                </div>
                <button class="cardBtn">Agregar</button>
            </div>
        </div>
    `
    contenedorProductos.appendChild(itemPintura);
}