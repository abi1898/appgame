const continuar = document.getElementById("continuar");
continuar.addEventListener("click",()=>{
    continuar.innerHTML="CARGANDO...";
    continuar.style.background="#2ecc71";
    continuar.style.color="white"
    setTimeout(()=>{
        window.location.href="registro.html";
    },1000);

});