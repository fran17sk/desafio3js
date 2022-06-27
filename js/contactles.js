//FORMULARIO CONTACTANOS
class Mensaje{
    constructor(name,email,cell,mensj){
        this.name=name;
        this.email=email;
        this.cell=cell;
        this.mensj=mensj;
    }
}

const mensajes = JSON.parse(localStorage.getItem('mensajes'))||[];
const form_msj=document.getElementById("Mensj_contactles");
const send_msj =()=>{
    let name_contact = document.getElementById("name_contact").value;
    let email_contact=document.getElementById("e-mail_contact").value;
    let cell_contact=document.getElementById("cell_contact").value;
    let mensj=document.getElementById("mensj").value;

    const nuevo_msj= new Mensaje(name_contact,email_contact,cell_contact,mensj);
    mensajes.push(nuevo_msj);
}

form_msj.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let name_contact = document.getElementById("name_contact").value;
    let email_contact=document.getElementById("e-mail_contact").value;
    let cell_contact=document.getElementById("cell_contact").value;
    let mensj=document.getElementById("mensj").value;
    
    if (name_contact=="" || email_contact=="" || mensj==""){
        swal('ERROR EN FORMULARIO','Todos los campos deben ser llanados correctamente','error');
    }else{
        send_msj()
        form_msj.reset();
        swal('RECIBIMOS TU MENSAJE','En los proximos dias responderemos a tu consulta','success');
        localStorage.removeItem("mensajes");
        localStorage.setItem("mensajes",JSON.stringify(mensajes));
    }
});