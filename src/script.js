window.onload = function() {

    if(window.innerWidth<764){
        var fb = document.getElementById("fb");
        fb.className="fab fa-facebook fa-x"
  
   
        var ig = document.getElementById("ig");
        ig.className="fab fa-instagram fa-x"

    }
    else if(window.innerWidth<1024){
        var fb = document.getElementById("fb");
        fb.className="fab fa-facebook fa-2x"
  
   
        var ig = document.getElementById("ig");
        ig.className="fab fa-instagram fa-2x"
      

    }
    else if(window.innerWidth>1024){
        var fb = document.getElementById("fb");
        fb.className="fab fa-facebook fa-3x"
  
   
        var ig = document.getElementById("ig");
        ig.className="fab fa-instagram fa-3x"
    }

 };


//validación de formulario

boton= document.getElementById("submit")
var regex=/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;

boton.addEventListener("click", ()=>{

    nombre = document.getElementById("name").value;
    email = document.getElementById("email").value;
    msg = document.getElementById("msg").value;


    if(nombre.length == 0) {
        alert("El campo nombre no puede contener valores nulos")
    }
    
    if( msg.length==0 || msg.length >= 1000) {
        alert("El mensaje contiene número de caracteres no admisibles, recuerde que se aceptan desde 0 a 1000 caracteres");
        
    }

    if( email.length == 0||regex.test(email)==false) {        
        alert("El formato del correo no es un valor aceptado");
    } 

});


