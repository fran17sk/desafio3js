$(document).ready(function(){
	var altura = $('.carou').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed-redes');
            $('.menu').removeClass('menu-fixed');

		} else {
			$('.menu').removeClass('menu-fixed-redes');
            $('.menu').addClass('menu-fixed');
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

function myFunction() {
	var x = document.getElementById("new_pasword");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

function myFunction2() {
	var x = document.getElementById("confirm_pasword");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

class Producto{
    constructor(nombre,marca,categoria,modelo,color,stock,precio){
        this.categoria=categoria;
        this.nombre=nombre;
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

//FUNCIONES
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

bicicletas=[];
repuestos=[];
equipamientos=[];
miCarrito=[];

//bibicletas
const producto1=new Producto ("Giant Talon 1","Giant","MontainBike",2022,"Azul",5,85000);
bicicletas.push(producto1);
const producto2=new Producto ("Giant Talon 3","Giant","MontainBike",2021,"Roja y Negra",3,105000);
bicicletas.push(producto2);
const producto3=new Producto ("Giant Aleron Pro","Giant","MontainBike",2022,"Azul y Negra",4,385000);
bicicletas.push(producto3);
const producto4=new Producto ("Trek Marlin 5","Trek","MontainBike",2022,"Azul y Naranja",5,95000);
bicicletas.push(producto4);
const producto5=new Producto ("Trek X-Caliver 6","Trek","MontainBike",2022,"Azul y Roja",5,285000);
bicicletas.push(producto5);
const producto6=new Producto ("Trek X-Caliver 7","Trek","MontainBike",2022,"Gris y Blanca",2,325000);
bicicletas.push(producto6);
const producto7=new Producto ("Trek X-Caliver 9","Trek","MontainBike",2022,"Celeste y Blanca",1,485000);
bicicletas.push(producto7);
const producto8=new Producto ("Trek Pro-Caliver 7","Trek","MontainBike",2022,"Celeste y Negra",1,685000);
bicicletas.push(producto8);
const producto9=new Producto ("Trek Pro-Caliver 9","Trek","MontainBike",2022,"Negra y Blanca",5,899000);
bicicletas.push(producto9);

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

//main 
let nombre,precio,cantidad,total;
let productos=[];
let codigo, conf;
let totalA;
console.log(bicicletas);
console.log(repuestos);
let bicis=["Giant Talon 1","Giant Talon 3","Giant Aleron Pro","Trek Marlin 5","Trek X-Caliver 6","Trek X-Caliver 7","Trek X-Caliver 9","Trek Pro-Caliver 7","Trek Pro-Caliver 9"];
alert("BIENBENIDO A LA CLETA|BICICLETAS");
alert("TENEMOS UNA MUY AMPLIA VARIEDAD DE BICICLETAS, DE MONTAÑA, PISTA, Y CICLOTURISMO");
let band=parseInt(prompt("INGRESE 1 PARA VENTAS DE BICICLETAS O 2 PARA REPUESTOS"));
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
