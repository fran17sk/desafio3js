//MOSTRAR Y OCULTAR CARRITO
const mostrarCarrito=document.getElementById("carrito")
const carr=document.querySelector(".cart-modal-overlay")
mostrarCarrito.onclick = () => {viewCarrito(carr)}
function viewCarrito(e){
    e.classList.add("open");
}
close_carr=document.getElementById("close-carrito")
close_carr.onclick = () => {closeCarrito(carr)}
function closeCarrito(e){
    e.classList.remove("open")
}
carr.addEventListener("click", (e)=>{
    if (e.target.classList.contains("cart-modal-overlay")){
        carr.classList.remove("open");
    }
})

//MOSTRAR ELEMENTOS EN EL CARRITO
const botclick=document.getElementsByClassName("add-to-cart");
const Products_rows=document.getElementById('product-rows')
const productRows = document.getElementsByClassName("product-row");
let Productos_carrito=JSON.parse(localStorage.getItem('carrito'))||[];

actualizarCarrito();

function actualizarCarrito(){    
    Productos_carrito.forEach(element=>{
        agregarElem(element.id,element.prodName,element.price,element.imgPord)
    })
}

function agregarElem(ProdId,prodName,price,imageSrc){
    let productRow = document.createElement("div");
    let productRows = document.querySelector(".product-rows");
    let prodArray = document.getElementsByClassName("product-row");

    for(let i=0; i<prodArray.length; i++) {
        if(prodArray[i].getAttribute("id")== ProdId) {
            alert("Este producto ya existe en el carrito");
            return;
        }
    }
    //inyectar el html al carrito
    let cartRowItem = `
        <div class="elemento-carrito product-row" id="${ProdId}">
            <h4 class="info-carrito">${prodName}</h4>
            <h4 class="info-carrito cart-price">${price}</h4>
            <input class="selector-carrito product-quantity" type="number" value="1">
            <img class="img-carrito" src="${imageSrc}">
            <svg id="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle remove-btn" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
        </div>
    `
    productRow.innerHTML = cartRowItem;
    productRows.append(productRow);
    productRow.querySelector(".remove-btn").addEventListener("click", removeItem);
    productRow.querySelector(".product-quantity").addEventListener("change", cambiarCantidad)
    updatePrice();
}

function removeItem(e) {
    let btnCliked = e.target;
    let iddeleted=btnCliked.parentElement;
    let elemento=iddeleted.getAttribute("id")
    btnCliked.parentElement.parentElement.remove();
    let i=0;
    let indice;
    Productos_carrito.forEach(element=>{
        if(element.id==elemento){
            indice=i;
            console.log(indice);
            Productos_carrito.splice(indice,1);
            console.log(Productos_carrito)
        }
        i++;
    })
    localStorage.removeItem('carrito');
    localStorage.setItem('carrito',JSON.stringify(Productos_carrito));
    updatePrice();

}

//cambiemos cantidades
function cambiarCantidad(e){
    let cantidad = e.target.value;
    if(isNaN(cantidad) || cantidad <= 0) {
        cantidad = 1;
    }
    updatePrice();
}

//actualizar el total
function updatePrice() {
    let total = 0;
    for(const producto of productRows) {
        let price = parseFloat(producto.querySelector(".cart-price").innerText.replace("$",""));
        let cantidad = producto.querySelector(".product-quantity").value;
        total += price * cantidad;
    }
    document.querySelector(".total-price").innerText = "$" + total;
    document.querySelector(".cart-quantity").textContent = productRows.length;
}




//scroll
$(document).ready(function(){
	var altura = $('.carou').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed-redes');
            $('.menu').removeClass('menu-fixed');
			$('.cart-modal').addClass('subir');

		} else {
			$('.menu').removeClass('menu-fixed-redes');
            $('.menu').addClass('menu-fixed');
			$('.cart-modal').removeClass('subir');
		}
	});
    $(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.redes').removeClass('menu-fixed-redes');
            
		} else {
			$('.redes').addClass('menu-fixed-redes');
		}
	});

});

//sweet alert
function msj(){
    swal('PROXIMAMENTE','Esta seccion no pertenece al proyecto final','error')
}

function myFunction0() {
	var x = document.getElementById("pass");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

function myFunction1() {
	var x = document.getElementById("password");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

function myFunction2() {
	var x = document.getElementById("password2");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}
