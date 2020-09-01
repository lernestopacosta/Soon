const formulario = document.getElementById("form")
formulario.addEventListener("submit", function (e) {
    const correo = document.querySelector(".correo")
    e.preventDefault()



    ValidateEmail(correo)

})


// Funcion para validar Email

function ValidateEmail(correo) {
    // console.log(correo)
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const error = document.querySelector(".error")
    if (correo.value.match(mailformat)) {
        
        alert("Gracias por suscribirte");
        i
        return true;
    } else {
        error.style.display="block"
      setTimeout(() => {
        error.style.display="none"
      }, 2000);
        return false;
    }
}