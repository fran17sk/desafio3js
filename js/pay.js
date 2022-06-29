class UI {
    mostrarProduct(producto){
        const productList=document.getElementById("productos_carrito_preCompra");
        const element=document.createElement('div');
        element.classList.add('espaciado')
        element.innerHTML = `
                <div id=${producto.id} class="item_carritoPreCompra">
                    <h6 class="nameProdItemCompra">${producto.prodName}</h6>
                    <h5 class='product-quantity'>${producto.cant}</h5>
                    <h5 class="cart-price">${producto.price}</h5>
                    <img src="${producto.imgPord}" alt="" class="img_item">
                    <svg xmlns="http://www.w3.org/2000/svg" onclick='removeItem()' width="16" height="16" fill="currentColor" class="bi bi-trash itemRemove remove-btn" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </div>
        `;
        productList.appendChild(element);
        element.querySelector(".remove-btn").addEventListener("click", removeItem);

    }
}
let productos;
function getProds(){
    productos=JSON.parse(localStorage.getItem('carrito'))||[];
}
let contenedor=document.getElementById('productos_carrito_preCompra');
let total=0;

function addProds(){
    productos.forEach(element => {
        const iu= new UI ();
        iu.mostrarProduct(element)
        total=total+parseInt(element.price.replace("$",""))
    });
}
function actualizartotal(){
    productos.forEach(element => {
        total=total+parseInt(element.price.replace("$",""))
    });
}
function removeItem(e){
    let btnCliked = e.target;
    let iddeleted=btnCliked.parentElement;
    let elemento=iddeleted.getAttribute("id")
    btnCliked.parentElement.parentElement.remove();
    let i=0;
    let indice;
    productos.forEach(element=>{
        if(element.id==elemento){
            indice=i;
            console.log(indice);
            productos.splice(indice,1);
            console.log(productos)
        }
        i++;
    })
    localStorage.removeItem('carrito');
    localStorage.setItem('carrito',JSON.stringify(productos));
    getProds();
    total=0;
    actualizartotal();
    updatePrice();
}
function updatePrice(){
    document.querySelector(".total-price").innerText = "$" + total;
}
getProds();
addProds();
updatePrice();
function msj(){
    swal('PROXIMAMENTE','Esta seccion no pertenece al proyecto final','error')
}