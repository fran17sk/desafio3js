const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const clientes = JSON.parse(localStorage.getItem("clientes")) || [];


class Cuenta{
	constructor(usuario,nombre,password,correo,telefono){
		this.usuario=usuario;
		this.nombre=nombre;
		this.password=password;
		this.correo=correo
		this.telefono=telefono;
	}
}
const crear = ()=>{
	let usuario = document.getElementById("usuario").value;
	let nombre = document.getElementById("nombre").value;
	let password = document.getElementById("password").value;
	let correo = document.getElementById("correo").value;
	let telefono = document.getElementById("telefono").value;

	const cliente = new Cuenta (usuario,nombre,password,correo,telefono);
	clientes.push(cliente);
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked===true ){
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		crear()
		localStorage.setItem("clientes",JSON.stringify(clientes))
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		}
		);
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});



//INICIAR SESION
const formularioLogin = document.getElementById('login');
const registro = document.querySelectorAll('#login input')

const expresion = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	pass: /^.{4,12}$/, // 4 a 12 digitos.
}

const valor = {
	user: false,
}

const validarDatos = (f) => {
	switch (f.target.name) {
		case "user":
			validarDato(expresion.user, f.target, 'user');
		break;
    }}

const validarDato = (expresion, input, camp) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${camp}`).classList.remove('login__grupo-incorrecto');
        document.getElementById(`grupo__${camp}`).classList.add('login__grupo-correcto');
        document.querySelector(`#grupo__${camp} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${camp} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${camp} .login__input-error`).classList.remove('login__input-error-activo');
        valor[camp] = true;
    } else {
        document.getElementById(`grupo__${camp}`).classList.add('login__grupo-incorrecto');
        document.getElementById(`grupo__${camp}`).classList.remove('login__grupo-correcto');
        document.querySelector(`#grupo__${camp} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${camp} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${camp} .login__input-error`).classList.add('login__input-error-activo');
        valor[camp] = false;
    }
}


registro.forEach((input) => {
	input.addEventListener('keyup', validarDatos);
	input.addEventListener('blur', validarDatos);
});

formularioLogin.addEventListener('submit', (f) =>{
    f.preventDefault();
	const clientes = JSON.parse(localStorage.getItem("clientes"));
	console.log(clientes);
	let band=false;
    userin=document.getElementById("user").value;
    passs=document.getElementById("pass").value;
    for(let client of clientes){
        if ((client.usuario===userin) && (client.password===passs)){
            band=true;
        }
    }
    if (band==true){
        document.getElementById('login__mensaje').classList.remove('login__mensaje-activo');
        document.getElementById('login__mensaje-exito').classList.add('login__mensaje-exito-activo');
		formularioLogin.reset();
		setTimeout(() => {
			document.getElementById('login__mensaje-exito').classList.remove('login__mensaje-exito-activo');
		}, 5000);
		document.querySelectorAll('.login__grupo-correcto').forEach((icono) => {
			icono.classList.remove('login__grupo-correcto');
		}
		);

    }else{
        document.getElementById('login__mensaje').classList.add('login__mensaje-activo');
        formularioLogin.reset();
    }

})