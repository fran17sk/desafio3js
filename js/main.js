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


let usuarios=[];

class User{
    constructor (name,email,username,cell,password){
        this.name=name;
        this.email=email;
        this.username=username;
        this.cell=cell;
        this.password=password;
    }
}

const crearUsuario = () => {
    let nombre=document.getElementById("name").value;
    let correo=document.getElementById("e-mail").value;
    let username=document.getElementById("username").value;
    let cell=document.getElementById("cell").value;
    let pass=document.getElementById("new_pasword").value;

    let new_user=new User (nombre,correo,username,cell,pass);
    usuarios.push(new_user);
}


