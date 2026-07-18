const boton = document.getElementById('ingresar');
boton.addEventListener('click',()=>{
const usuario=document.querySelector('input[type="text]').value;
const contraseña=document.querySelector('input[type="password"]').value;
if(usuario==="" || contraseña===""){
alert("Completa todos los campos");
return;
}
alert("Bienvenido " + usuario);
window.location.href="menu.html";
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