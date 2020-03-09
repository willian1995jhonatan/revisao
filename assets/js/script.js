document.getElementById('botao').addEventListener('click',function(e) {
    var nome = document.getElementById("nome").value;
   
    if(nome.length < 3) {
        /*tem erro - preventDefault() vai cancelar a ação de submit - ele previne o acontecimento do evento submit*/
        e.preventDefault();
        document.getElementById("nome").style.backgroundColor ="red";
    }
    else{
        document.getElementById("nome").style.backgroundColor="white";
    }

});
