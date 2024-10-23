function cambiarPrimerForm() {
    const empresaId = document.getElementById("empresaId");
    const personaId = document.getElementById("personaId");
    empresaId.style.display = "block";
    personaId.style.display = "none";  
}

function cambiarSegundoForm() {
    const empresaId = document.getElementById("empresaId");
    const personaId = document.getElementById("personaId");
    personaId.style.display = "block";
    empresaId.style.display = "none";  
}

