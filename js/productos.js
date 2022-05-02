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

class UI {
    mostrarProduct(producto){
        const productList=document.getElementById("listado");
        const element=document.createElement('div');
        element.classList.add('espaciado')
        element.innerHTML = `
                <div id=${producto.cod} class="producto">
                <img src="../img/productos/${producto.imagen || "default.jpg"}" alt="" class="img-prod">
                <h5>$ ${producto.precio}</h5>
                <div class="c">
                    <h6 class="titleProd">${producto.nombre}</h6>
                    <h6 class="addcarrito">AGREGAR AL CARRITO</h6>
                </div>
                </div>
        `;
        productList.appendChild(element);
    }
    agregarProducto(producto){
        const carr=document.getElementById("carrito")

    }
}


//MOSTRAR CARRITO
const mostrarCarrito=document.getElementById("carrito")
const carr=document.getElementById("MiCarrito")
mostrarCarrito.onclick = () => {viewCarrito(carr)}
function viewCarrito(e){
    e.classList.add("divcarrito-mostrar")
    e.classList.remove("divcarrito-ocultar")
}
close_carr=document.getElementById("close-carrito")
close_carr.onclick = () => {closeCarrito(carr)}
function closeCarrito(e){
    e.classList.remove("divcarrito-mostrar")
    e.classList.add("divcarrito-ocultar")
}

function agregarCarrito(producto,carrito,i){
    carrito[i]=producto;
}
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

const bicicletas=[];
repuestos=[];
equipamientos=[];
miCarrito=[];

//bibicletas
function almacenar(){
    const producto=new Producto (1001,"Giant Talon 1","Giant","MontainBike","giant-talon1.jpg",2022,"Gris",5,85000);
    bicicletas.push(producto);
    const productoa=new Producto (1002,"Giant Talon 2","Giant","MontainBike","giant-talon2.jpg",2021,"Azul metal",3,98000);
    bicicletas.push(productoa);
    const productob=new Producto (1003,"Giant Talon 3","Giant","MontainBike","giant-talon3.jpg",2021,"Azul y Negro",3,105000);
    bicicletas.push(productob);
    const productoc=new Producto (1004,"Giant Talon 4","Giant","MontainBike","giant-talon4.jpg",2021,"Negra",3,250000);
    bicicletas.push(productoc);
    const productod=new Producto (1005,"Giant Fathon","Giant","MontainBike","fathon.jpg",2021,"Negra y azul",3,350000);
    bicicletas.push(productod);
    const productoe=new Producto (1006,"Giant Advanced Pro","Giant","MontainBike","advanced.jpg",2022,"Naranja y Negro",4,1200000);
    bicicletas.push(productoe);
    const productof=new Producto (1007,"Giant Advanced","Giant","MontainBike","advanced29.jpg",2022,"Negro y Bordo",4,900000);
    bicicletas.push(productof);
    const productog=new Producto (1008,"Trek Marlin 5","Trek","MontainBike","marlin5.jpg",2022,"Negro",5,95000);
    bicicletas.push(productog);
    const productoh=new Producto (1009,"Trek X-Caliver 7","Trek","MontainBike","xcaliver7.jpg",2022,"Azul",5,285000);
    bicicletas.push(productoh);
    const productoi=new Producto (1010,"Trek X-Caliver 8","Trek","MontainBike","xcaliver8.jpg",2022,"Rojo",2,325000);
    bicicletas.push(productoi);
    const productoj=new Producto (1011,"Trek X-Caliver 9","Trek","MontainBike","xcaliver9.jpg",2022,"Gris",1,485000);
    bicicletas.push(productoj);
    const productok=new Producto (1012,"Trek Pro-Caliver 7","Trek","MontainBike","procaliver7.jpg",2022,"Negra",1,685000);
    bicicletas.push(productok);
    const productol=new Producto (1013,"Trek Pro-Caliver 8","Trek","MontainBike","procaliver8.jpg",2022,"Gris",1,790000);
    bicicletas.push(productol);
    const productom=new Producto (1014,"Trek Pro-Caliver 9","Trek","MontainBike","procaliver9.jpg",2022,"Negra",5,899000);
    bicicletas.push(productom);
    const producton=new Producto (1015,"Venzo Elemento","Venzo","MontainBike","elemento.jpg",2022,"Rojo y Negro",1,485000);
    bicicletas.push(producton);
    const productoo=new Producto (1016,"Venzo Stinger","Venzo","MontainBike","venzo-stinger.jpg",2022,"Verde",1,685000);
    bicicletas.push(productoo);
    const productop=new Producto (1017,"Venzo Vulcan","Venzo","MontainBike","vulcan.jpg",2022,"Rojo y Negro",1,790000);
    bicicletas.push(productop);

    const productoq=new Producto (1018,"Trek Madone SL","Trek","Ruta","madone-sl-ruta.jpg",2022,"Blanca",1,700000);
    bicicletas.push( productoq);
    const productor=new Producto (1019,"Trek Concept SL","Trek","Ruta","concept-ruta.jpg",2022,"Rojo y Negro",1,790000);
    bicicletas.push( productor);
    const productot=new Producto (1020,"Trek Domane","Trek","Ruta","domane-ruta.jpg",2022,"Rojo",3,800000);
    bicicletas.push( productot);
    const productou=new Producto (1021,"Trek Madone","Trek","Ruta","madone-ruta.jpg",2022,"Negro y gris",5,590000);
    bicicletas.push( productou);
    const productov=new Producto (1022,"Trek Emonda Pro","Trek","Ruta","emonda pro-ruta.jpg",2022,"Azul y Celeste",1,1350000);
    bicicletas.push( productov);
    const productow=new Producto (1023,"Trek Emonda","Trek","Ruta","emonda-ruta.jpg",2022,"Roja y Azul",1,900000);
    bicicletas.push( productow);
    const productox=new Producto (1024,"Giant Contend","Giant","Ruta","contend-ruta.jpg",2022,"Negro y Naranja",2,580000);
    bicicletas.push( productox);
    const productoy=new Producto (1025,"Giant SRC","Giant","Ruta","src-ruta.jpg",2022,"Negro y Azul",5,320000);
    bicicletas.push( productoy);
    const productoz=new Producto (1026,"Giant TCR","Giant","Ruta","tcr-ruta.jpg",2022,"Negro y Azul",4,380000);
    bicicletas.push( productoz);
    const productoaa=new Producto (1027,"Giant Advanced","Giant","Ruta","advanced-ruta.jpg",2022,"Blanca",6,300000);
    bicicletas.push(productoaa);
    const productoab=new Producto (1028,"Giant Scorpion","Giant","Downhill","giant-down.jpg",2022,"Negro y Azul",1,1320000)
    bicicletas.push(productoab);
    const productoac=new Producto (1029,"Trek Session 8","Trek","Downhill","session 8-down.jpg",2022,"Verde Militar",1,1900000);
    bicicletas.push(productoac);
    const productoad=new Producto (1030,"Trek Session 9.6","Trek","Downhill","session-down.jpg",2022,"Roja",1,2200000);
    bicicletas.push(productoad);
    const productoae=new Producto (1031,"Scott XLC","Scott","Downhill","scott-down.jpg",2022,"Gris",1,1790000);
    bicicletas.push(productoae);
    const productoaf=new Producto (1032,"Capierre Atiwit","Capierre","Downhill","atiwit-down.jpg",2022,"Rojo y Negro",1,1290000);
    bicicletas.push(productoaf);
    const productoag=new Producto (1033,"Scott GLory 2022","Scott","Downhill","glory-down.jpg",2022,"Dorada",1,1590000);
    bicicletas.push(productoag);


    //repuestos
    const producto10=new Producto ("camara rodado 29","rct","repuesto",2022,"Negra",33,1900);
    repuestos.push(producto10);
    const producto11=new Producto ("cubierta maxxis icon 29","maxxis","repuesto",2022,"Negra",14,15000);
    repuestos.push(producto11);
    const producto12=new Producto ("piñon shimano alivio 9s 11-36t","shimano","repuesto",2022,"negro",25,9000);
    repuestos.push(producto12);
    const producto13=new Producto ("descarrilador alivio shadow","shimano","repuesto",2022,"gris",140,12000);
    repuestos.push(producto13);
    const producto14=new Producto ("asciento","vento","repuesto",2022,"Blanco negro rojo",12,5000);
    repuestos.push(producto14);
    const producto15=new Producto ("Plato","shimano","repuesto",2022,"gris",21,25000);
    repuestos.push(producto15);
    const producto16=new Producto ("caja pedalera","shimano","repuesto",2022,"gris",15,5000);
    repuestos.push(producto16)
    localStorage.removeItem("bicicletas");
    localStorage.setItem("bicicletas",JSON.stringify(bicicletas));
}


const form_prod=document.getElementById("AgregarProd");
const text = document.querySelectorAll(".form-newprod");
const crearprod =()=>{
    let nombre_prod=document.getElementById("inNombre").value || "default";
    let marca_prod=document.getElementById("inMarca").value;
    let categoria_prod=document.getElementById("inCategoria").value;
    let imagen_prod=document.getElementById("inImagen").value;
    let modelo_prod=document.getElementById("inModelo").value;
    let color_prod=document.getElementById("inColor").value;
    let precio_prod=document.getElementById("inPrecio").value;

    const nuevo_prod= new Producto(nombre_prod,marca_prod,categoria_prod,imagen_prod,modelo_prod,color_prod,precio_prod);
    bicicletas.push(nuevo_prod)

}

const valores = {
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
    if (valores.Nombre && valores.Marca && valores.Categoria && valores.Imagen && valores.Modelo && valores.Color && valores.Precio){
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
    }else{
        document.getElementById("mensaje").classList.remove("mensaje-oculto");
        document.getElementById("mensaje").classList.add("mensaje-activo");
    }
});

almacenar();
const bicicletasmostrar = JSON.parse(localStorage.getItem("bicicletas"));
bicicletasmostrar.forEach(element => {
    const ui = new UI ();
    ui.mostrarProduct(element);
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
