const boton = document.getElementById("ingresar");
boton.addEventListener("click", function(){

    boton.innerHTML="CARGANDO...";

    setTimeout(function(){

        window.location.href="registro.html";

    },1000);

});
const interruptor = document.getElementById("daltonismo");

if (localStorage.getItem("daltonico") === "true") {
    document.body.classList.add("modo-daltonico");
    interruptor.checked = true;
}

interruptor.addEventListener("change", () => {
    document.body.classList.toggle("modo-daltonico");

    localStorage.setItem(
        "daltonico",
        document.body.classList.contains("modo-daltonico")
    );
});