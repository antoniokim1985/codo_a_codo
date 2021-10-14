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


