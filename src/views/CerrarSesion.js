
export default function CerrarSesion() {

  if(localStorage.getItem("id") ){
    console.log("entra en cerrar sesion y existe")
    localStorage.removeItem('id');
    localStorage.removeItem('tipoUsuario');
    localStorage.removeItem('esEmpresa')
    window.location = '/'
  }else{
    window.location = '/signIn'
  }

 

  
}

