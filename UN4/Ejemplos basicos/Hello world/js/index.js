function askName() {
    let person = prompt("Ingrese su nombre", "nombre");

    if (person != null) {
        document.getElementById("showText").innerHTML =
            "Hola " + person + "! Cómo estás?";
    }
}

function confirmResult() {

    let result = confirm("Desea confirmar?");
    let show;
    if (result) {
        show = "Aceptaste";
    }
    else {
        show="No aceptaste"
    }
    document.getElementById("showText").innerHTML = show;
}