const registrar = document.getElementById("registrar");
registrar.addEventListener("click", function () {
    const usuario = document.querySelector('input[type="text"]').value;
    const contraseña = document.querySelector('input[type="password"]').value;
    if (usuario === "" || contraseña === "") {
        alert("Completa todos los campos.");
        return;
    }
    registrar.innerHTML = "REGISTRANDO...";
    registrar.style.background = "#00C853";
    setTimeout(() => {
        alert("¡Registro exitoso!");
        window.location.href = "bienvenida.html";

    }, 1200);

});
const interruptor = document.getElementById("daltonismo");
interruptor.addEventListener("change",function(){
document.body.classList.toggle(
"daltonico"
);

});