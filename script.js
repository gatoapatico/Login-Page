function validarLogin(){
    if(username.value == "ditoval" && password.value == "123dito"){
        alert("Ingreso de sesión CORRECTO!")
    } else{
        alert("Los datos ingresados NO son válidos.")
    }
    location.reload();
}