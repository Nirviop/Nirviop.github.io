document.getElementById("Datos_Personales").onclick = function mostrarDatospersonales () {
    console.log("evento click");
    document.getElementById("Datos_Personales_Contenido").style.display = "block";
    document.getElementById("Estudios_Contenido").style.display = "none";
    document.getElementById("Experiencia_Laboral_Contenido").style.display = "none";
}

document.getElementById("Estudios").onclick = function mostrarEstudios () {
    console.log("evento click");
    document.getElementById("Datos_Personales_Contenido").style.display = "none";
    document.getElementById("Estudios_Contenido").style.display = "block";
    document.getElementById("Experiencia_Laboral_Contenido").style.display = "none";
}

document.getElementById("Experiencia_Laboral").onclick = function mostrarExperiencialaboral () {
    console.log("evento click");
    document.getElementById("Datos_Personales_Contenido").style.display = "none";
    document.getElementById("Estudios_Contenido").style.display = "none";
    document.getElementById("Experiencia_Laboral_Contenido").style.display = "block";
}

