const nombre = document.querySelector('#nombre');
const ciclo = document.querySelector('#ciclo');
const modalidad = document.querySelector('#modalidad');
const dni = document.querySelector('#dni');
const email = document.querySelector('#email');
const celular = document.querySelector('#celular');
const btnEnviar = document.querySelector('#btnEnviar');

function enviar() {
    const mensaje = `https://api.whatsapp.com/send?phone=51944405449&text=
    📚Ciclo:%20${ciclo.value}%0A
    👨‍🏫Modalidad:%20${modalidad.value}%0A
    Nombre:%20${nombre.value}%0A
    DNI:%20${dni.value}%0A
    Correo:%20${email.value}%0A
    Celular:%20${celular.value}`;
    
    btnEnviar.href = mensaje;
}
