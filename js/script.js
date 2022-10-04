const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");

const products = [
    {
        id: 1,
        nombre: "Balenciaga Hourglass Bag",
        precio: 1450,
        img: "../fts/balenciaga.jpg", 
    },
    {
        id: 2,
        nombre: "Hermès Birkin Bag",
        precio: 11414,
        img: "../fts/birkin.jpg",
    },
    {
        id: 3,
        nombre: "Channel 22.5 Bag",
        precio: 3360,
        img: "../fts/chanel.jpg",
    },
    {
        id: 4,
        nombre: "Louis Vuitton Twist-MM Bag",
        precio: 3450,
        img: "../fts/louisvuitton.jpg",
    },
    {
        id: 5,
        nombre: "Prada Cleo Bag",
        precio: 1950,
        img: "../fts/prada.jpg",
    },
    {
        id: 6,
        nombre: "YSL Kaia Bag",
        precio: 1450,
        img: "../fts/ysl.jpg",
    },
];

let carrito = [];

products.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content); 

    let buy = document.createElement("button");
    buy.innerText = "add to cart";
    buy.className = "card-button";

    content.append(buy);

    buy.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
    });
});

verCarrito.addEventListener("click", () => {
    const modalHeader = document.createElement("div");
    modalHeader.className = "modalHeader";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">CART</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";

    modalHeader.append(modalButton)
});