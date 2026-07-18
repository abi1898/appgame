const interruptor = document.getElementById("daltonismo");

if(interruptor){
    interruptor.addEventListener("change", function(){

        if(this.checked){
            document.body.classList.add("daltonismo");
            localStorage.setItem("modoDaltonismo","activo");
        }else{
            document.body.classList.remove("daltonismo");
            localStorage.setItem("modoDaltonismo","inactivo");
        }

    });
}
window.addEventListener("load",()=>{

    if(localStorage.getItem("modoDaltonismo")=="activo"){
        document.body.classList.add("daltonismo");

        if(interruptor){
            interruptor.checked=true;
        }
    }

});