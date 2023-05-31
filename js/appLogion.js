

const registrarUsuario =()=>{
    var nombre = document.querySelector("#nombre").value;
    var correo = document.querySelector("#correo").value;
    var password = document.querySelector("#password").value;

    if(nombre.trim()===''||
    correo.trim()===''||
    password.trim()===''){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'FALTA LLONAR CAMPOS!',
            footer: 'CRUD NICKYVCONTACTOS'
        })

    }

}