const Clickbutton = document.querySelectorAll('.button')
let cart = []

Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCart)
})

function addToCartItem(e) {
    const button = e.target
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent; 
    const itemImage = item.querySelector('.card-img.top').src;

    const newCart = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImage,
        cantidad: 1 
    }

    addItemCart(newCart)
}

function addItemCart(newCart){
    cart.push(newCart)
}