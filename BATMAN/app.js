const button = document.getElementById('confirmer');
button.addEventListener('click', function(){
    let newsletter = document.forms["newsletter"]["email", "newsletter", "commentaire"].value;
    let oui = document.getElementById("checkbox1");
    let non = document.getElementById("checkbox2");
    let message = document.getElementById("pop-up");

    if (newsletter ==""){
        alert("les champs sont obligatoire");
    
    }else if( oui.checked ==false && non.checked ==false){
        alert("les champs sont obligatoire");
    }
    else{
        message.style.visibility = 'visible';
    }
    
} ,3000 )