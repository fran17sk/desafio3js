class Producto{
    constructor(cod,nombre,marca,categoria,imagen,modelo,color,stock,precio){
        this.cod=cod;
        this.categoria=categoria;
        this.nombre=nombre;
        this.imagen=imagen;
        this.marca=marca;
        this.modelo=modelo;
        this.color=color;
        this.stock=stock;
        this.precio=precio;
    }
    sumaIva(){
        this.precio=this.precio*1.21;
    }
}
class Carrito{
    constructor(id,prodName,price,imgProd){
        this.id=id;
        this.prodName=prodName;
        this.price=price;
        this.imgPord=imgProd;
    }
}

class UI {
    mostrarProduct(producto){
        const productList=document.getElementById("listado");
        const element=document.createElement('div');
        element.classList.add('espaciado')
        element.innerHTML = `
                <div id=${producto.cod} class="producto card">
                <img src="../img/productos/${producto.imagen || "default.jpg"}" alt="" class="img-prod">
                <h5 class="product-price">$ ${producto.precio}</h5>
                <div class="c">
                    <h6 class="titleProd">${producto.nombre}</h6>
                </div>
                <button class="add-to-cart">COMPRAR</button>
                </div>
        `;
        productList.appendChild(element);
    }
}
bicicletas=JSON.parse(data);

function addprodtopage(){
    bicicletas.forEach(element => {
        const ui = new UI ();
        ui.mostrarProduct(element);
    });
}
addprodtopage();

//AGREGAMOS LOS PRODUCTOS AL CARRITO EN EL LOCAL STORAGE

const addToCart = document.getElementsByClassName("add-to-cart");
const miCarrito = JSON.parse(localStorage.getItem('carrito'))||[];

for (let i=0; i < addToCart.length; i++) {
    let boton = addToCart[i];
    boton.addEventListener("click", agregarCarrito)
    boton.addEventListener("click",Mostrar_Prods_Carrito)
}

function agregarCarrito(e){
    let boton = e.target;
    let CardItem = boton.parentElement;
    let ProdId=CardItem.getAttribute("id");
    let prodName = CardItem.querySelector("h6").innerText;
    let price = CardItem.querySelector(".product-price").innerText;
    let imageSrc = CardItem.querySelector(".img-prod").src;
    let prodAdd;
    band=0;
    if(miCarrito.length==0){
        band=1;
    }else{
        miCarrito.forEach(element=>{
            if(ProdId==element.id){
                band=0
            }else{
                band=1;
            }
        })
    }
    if(band==0){
        alert("El articulo ya se encuentra en el carrito..!")
    }
    if(band==1){
        prodAdd= new Carrito(ProdId,prodName,price,imageSrc);
        almacenar(prodAdd);
        band=0;
    }
}
function almacenar(prod){
    miCarrito.push(prod);
    localStorage.removeItem('carrito');
    localStorage.setItem('carrito',JSON.stringify(miCarrito));
}

//FORMULARIO PARA AGREGAR UN PRODUCTO
const form_prod=document.getElementById("AgregarProd");
const text = document.querySelectorAll(".form-newprod");
const crearprod =()=>{
    let cod_prod = document.getElementById("inCodigo").value;
    let nombre_prod=document.getElementById("inNombre").value || "default";
    let marca_prod=document.getElementById("inMarca").value||"default";
    let categoria_prod=document.getElementById("inCategoria").value||"default";
    let imagen_prod="default.jpg";
    let modelo_prod=document.getElementById("inModelo").value||"default";
    let color_prod=document.getElementById("inColor").value||"default";
    let precio_prod=document.getElementById("inPrecio").value||"default";

    const nuevo_prod= new Producto(cod_prod,nombre_prod,marca_prod,categoria_prod,imagen_prod,modelo_prod,color_prod,1,precio_prod);
    bicicletas.push(nuevo_prod);

}

const valores = {
    Codigo:false,
    Nombre:false,
    Marca:false,
    Categoria:false,
    Imagen:false,
    Modelo:false,
    Color:false,
    Precio:false
}

const validarform = (e) =>{
    switch (e.target.name){
        case "Codigo":
            validarCamp(e.target,"Codigo");
        break;
        case "Nombre":
            validarCamp(e.target,"Nombre");
        break;
        case "Marca":
            validarCamp(e.target,"Marca");
        break;
        case "Categoria":
            validarCamp(e.target,"Categoria");
        break;
        case "Imagen":
            validarCamp(e.target,"Imagen");
        break;
        case "Modelo":
            validarCamp(e.target,"Modelo");
        break;
        case "Color":
            validarCamp(e.target,"Color");
        break;
        case "Precio":
            validarCamp(e.target,"Precio");
        break;
    }
}

const validarCamp = (form,campo) => {
    if (form.value==""){
        document.getElementById(`innn${campo}`).classList.remove("inicial");
        document.getElementById(`in${campo}`).classList.add("form-crear-vacio");
        document.getElementById(`in${campo}`).classList.remove("form-crear-valido");
        document.getElementById(`inn${campo}`).classList.add("mensaje-newprod-activo");
        document.getElementById(`inn${campo}`).classList.remove("mensaje-newprod-oculto");
        document.getElementById(`innn${campo}`).classList.add("activo");
        document.getElementById(`innn${campo}`).classList.remove("oculto");
        document.getElementById(`innn${campo}`).classList.remove("fa-check-circle");
        document.getElementById(`innn${campo}`).classList.add("fa-times-circle");
        valores[campo]=false;
    }else{
        document.getElementById(`innn${campo}`).classList.remove("inicial");
        document.getElementById(`in${campo}`).classList.remove("form-crear-vacio");
        document.getElementById(`in${campo}`).classList.add("form-crear-valido");
        document.getElementById(`inn${campo}`).classList.remove("mensaje-newprod-activo");
        document.getElementById(`inn${campo}`).classList.add("mensaje-newprod-oculto");
        document.getElementById(`innn${campo}`).classList.add("oculto");
        document.getElementById(`innn${campo}`).classList.remove("activo");
        document.getElementById(`innn${campo}`).classList.add("fa-check-circle");
        document.getElementById(`innn${campo}`).classList.remove("fa-times-circle");
        valores[campo]=true;
    }
}


text.forEach(element => {

    element.addEventListener('keyup', validarform);
	element.addEventListener('blur', validarform);
})

form_prod.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (valores.Codigo && valores.Nombre && valores.Marca && valores.Categoria && valores.Imagen && valores.Modelo && valores.Color && valores.Precio){
        crearprod();
        form_prod.reset();
        document.getElementById('formulario-exito').classList.add('formulario-exito-activo');
        setTimeout(() => {
			document.getElementById('formulario-exito').classList.remove('formulario-exito-activo');
		}, 5000);
        document.querySelectorAll('.oculto').forEach((icono) => {
			icono.classList.remove('oculto');
            icono.classList.add("inicial");
		}
		);
        localStorage.removeItem("bicicletas");
        localStorage.setItem("bicicletas",JSON.stringify(bicicletas));
        aux=bicicletas.length;
        const ui = new UI;
        ui.mostrarProduct(bicicletas[aux-1]);
    }else{
        document.getElementById("mensaje").classList.remove("mensaje-oculto");
        document.getElementById("mensaje").classList.add("mensaje-activo");
    }
});









// lista=[]
// let listado=document.querySelector(".carou")
// if(lista.length==0){
//     listado.innerHTML = '<h3 class="mensaje-error-prod">NO HAY PRODUCTOS PARA MOSTRAR</h3>'
//     listado.classList.add("centrar")
// }


//main 
let nombre,precio,cantidad,total;
let codigo, conf;
let totalA;

function sumarValoresPropiedades(datos, fn) {
    return datos.map(typeof fn === 'function' ? fn : d => d[fn]).reduce((a, v) => a + v, 0);
}
function subtotal(cantidad,lista,indice){
    let subtotal=cantidad*lista[indice];
    return subtotal;
}
function financiado(total,plan){
    if (plan==0){
        let totalfin=total*0.90;
        return totalfin;
    }
    if (plan==1){
        let totalfin=total*1.5;
        return totalfin;
    }
    if (plan==3){
        let totalfin=total*1.12;
        return totalfin;
    }
    if (plan==6){
        let totalfin=total*1.25;
        return totalfin;
    }
    if (plan==9){
        let totalfin=total*1.35;
        return totalfin;
    }
    if (plan==12){
        let totalfin=total*1.45;
        return totalfin;
    }
}


band=0
if (band == 1){
    codigo=parseInt(prompt("BICICLETAS EN STOCK:\nCod\n1)  Giant Talon 1  $85.000\n2)  Giant Talon 3  $105.000\n3)  Giant Aleron Pro  $385.000\n4)  Trek Marlin 5  $95.000\n5)  Trek X-Caliver 6  $285.000\n6)  Trek X-Caliver 7  $325.000\n7)  Trek X-Caliver 9  $485.000\n8)  Trek Pro-Caliver 7  $685.000\n9)  Trek Pro-Caliver 9  $899.000\nINGRESE EL CODIGO DE LA BICI QUE DESEA COMPRAR"));
    conf=confirm("UDS ACABA DE ELEGIR "+bicicletas[codigo-1].nombre +" A $ "+bicicletas[codigo-1].precio);
    i=1;
    while(conf==true){
        if (i==1){
            miCarrito.push(bicicletas[codigo-1]);
            bicicletas[codigo-1].stock=bicicletas[codigo-1].stock-1;   
            conf=confirm("DESEA AGREGAR MAS PRODUCTOS AL CARRITO?"); 
        }
        else{
            codigo=parseInt(prompt("BICICLETAS EN STOCK:\nCod\n1)  Giant Talon 1  $85.000\n2)  Giant Talon 3  $105.000\n3)  Giant Aleron Pro  $385.000\n4)  Trek Marlin 5  $95.000\n5)  Trek X-Caliver 6  $285.000\n6)  Trek X-Caliver 7  $325.000\n7)  Trek X-Caliver 9  $485.000\n8)  Trek Pro-Caliver 7  $685.000\n9)  Trek Pro-Caliver 9  $899.000\nINGRESE EL CODIGO DE LA BICI QUE DESEA COMPRAR"));
            conf=confirm("UDS ACABA DE ELEGIR "+bicicletas[codigo-1].nombre +" A $ "+bicicletas[codigo-1].precio);
            miCarrito.push(bicicletas[codigo-1]);
            bicicletas[codigo-1].stock=bicicletas[codigo-1].stock-1; 
            conf=confirm("DESEA AGREGAR MAS PRODUCTOS AL CARRITO?");
        }
        i++;
    }

    totalA=sumarValoresPropiedades(miCarrito, 'precio');
    cantidadProductos=miCarrito.length;
    console.log(miCarrito);
    console.log("Total a pagar $ "+totalA);
    pago=prompt("TOTAL A PAGAR: "+totalA+"\n¿DESEA ABONAR EN EFECTIVO O FINANCIADO?");
    
        pago=pago.toLowerCase();
        if (pago=="efectivo"){
            totalA=financiado(totalA,0);
            conf=confirm("LE HICIMOS UN 10% DE DESCUENTO, EL TOTAL A PAGAR ACTUALIZADO ES: "+totalA);
            alert("PAGO EXITOSO GENERANDO FACTURA...");
            alert("MUCHAS GRACIAS, VUELVA PRONTO");
        }else{
            if(pago=="financiado"){
                plan=parseInt(prompt("ELIJA LA CANTIDAD DE CUOTAS:\n1 CUOTA CON 5% DE RECARGO\n3 CUOTA CON 12% DE RECARGO\n6 CUOTA CON 25% DE RECARGO\n9 CUOTA CON 35% DE RECARGO\n12 CUOTA CON 45% DE RECARGO\n"));
                total=financiado(totalA,plan);
                conf=confirm("EL TOTAL A PAGAR ACTUALIZADO ES $"+total+"\n"+"PAGO EN "+plan+" $ "+total/plan);
                if (conf==true){
                    alert("PAGO EXITOSO GENERANDO FACTURA...");
                    alert("MUCHAS GRACIAS, VUELVA PRONTO");
                }
                if (conf==false){
                    alert("PAGO ANULADO. GRACIAS POR VISITARNOS");
                }
            }
        }
    console.log(bicicletas);
    console.log(miCarrito);
}
if (band == 2){
    let x = parseInt(prompt("Ingrese [1] para agregar productos en su carrito o [0] para sali y pagar"));
    let aux=0;
    let i=0;
    let indice=0;
    let subt=0;
    let total=0;
    let plan,pago;
    while (x==1){
        codigo=parseInt(prompt("TENEMOS DIPONIBLE:\n"+"1)"+repuestos[0].nombre+" $ "+repuestos[0].precio+" Stock \t"+repuestos[0].stock+"\n"+"2)"+repuestos[1].nombre+" $ "+repuestos[1].precio+" Stock \t"+repuestos[1].stock+"\n"+"3)"+repuestos[2].nombre+" $ "+repuestos[2].precio+" Stock \t"+repuestos[2].stock+"\n"+"4)"+repuestos[3].nombre+" $ "+repuestos[3].precio+" Stock \t"+repuestos[3].stock+"\n"+"5)"+repuestos[4].nombre+" $ "+repuestos[4].precio+" Stock \t"+repuestos[4].stock+"\n"+"6)"+repuestos[5].nombre+" $ "+repuestos[5].precio+" Stock \t"+repuestos[5].stock+"\n"+"7)"+repuestos[6].nombre+" $ "+repuestos[6].precio+" Stock \t"+repuestos[6].stock+"\nIngrese el nombre el codigo del producto que desa llevar: "));
        while ((codigo>7) && (codigo<0)){
            alert("INGRESO UN VALOR ERRONEO")
            codigo=parseInt(prompt("TENEMOS DIPONIBLE:\n"+"1)"+repuestos[0].nombre+" $ "+repuestos[0].precio+" Stock \t"+repuestos[0].stock+"\n"+"2)"+repuestos[1].nombre+" $ "+repuestos[1].precio+" Stock \t"+repuestos[1].stock+"\n"+"3)"+repuestos[2].nombre+" $ "+repuestos[2].precio+" Stock \t"+repuestos[2].stock+"\n"+"4)"+repuestos[3].nombre+" $ "+repuestos[3].precio+" Stock \t"+repuestos[3].stock+"\n"+"5)"+repuestos[4].nombre+" $ "+repuestos[4].precio+" Stock \t"+repuestos[4].stock+"\n"+"6)"+repuestos[5].nombre+" $ "+repuestos[5].precio+" Stock \t"+repuestos[5].stock+"\n"+"7)"+repuestos[6].nombre+" $ "+repuestos[6].precio+" Stock \t"+repuestos[6].stock+"\nIngrese el nombre el codigo del producto que desa llevar: "));
        }
        cantidad=prompt("¿Que cantidad desea llevar?");
        subt=cantidad*repuestos[codigo-1].precio;
        acept=confirm("El bubtotal del producto "+repuestos[codigo-1].nombre+ " es "+subt);
        if (acept==true){
            total=total+subt;
        }else{
            while(acept==false){
                cantidad=prompt("¿Que cantidad desea llevar de "+repuestos[codigo].nombre+" ?");
                subt=cantidad*repuestos[codigo-1].precio;
                acept=confirm("El bubtotal del producto "+repuestos[codigo-1].nombre+ " es "+subt);
                if (acept==true){
                    total=total+subt;
            }
        }
        }
        x = parseInt (prompt("¿Ingrese 1 para agregar un producto o 0 para salir y pagar"));
    }
    while((x==0)&&(total!=0)){
        alert("En tu carrito El total a pagar es "+total);
        pago=prompt("TOTAL A PAGAR: "+total+"\n¿DESEA ABONAR EN EFECTIVO O FINANCIADO?");
        pago=pago.toLowerCase();
        if (pago=="efectivo"){
            total=financiado(total,0);
            conf=confirm("LE HICIMOS UN 10% DE DESCUENTO, EL TOTAL A PAGAR ACTUALIZADO ES: "+total);
            alert("PAGO EXITOSO GENERANDO FACTURA...");
            alert("MUCHAS GRACIAS, VUELVA PRONTO");
        }else{
            if(pago=="financiado"){
                plan=parseInt(prompt("ELIJA LA CANTIDAD DE CUOTAS:\n1 CUOTA CON 5% DE RECARGO\n3 CUOTA CON 12% DE RECARGO\n6 CUOTA CON 25% DE RECARGO\n9 CUOTA CON 35% DE RECARGO\n12 CUOTA CON 45% DE RECARGO\n"));
                total=financiado(total,plan);
                conf=confirm("EL TOTAL A PAGAR ACTUALIZADO ES $"+total+"\n"+"PAGO EN "+plan+" $ "+total/plan);
                if (conf==true){
                    alert("PAGO EXITOSO GENERANDO FACTURA...");
                    alert("MUCHAS GRACIAS, VUELVA PRONTO");
                }
                if (conf==false){
                    alert("PAGO ANULADO. GRACIAS POR VISITARNOS");
                }
            }
        }
        console.log(repuestos);
        console.log(miCarrito);
        break;
    }
}
