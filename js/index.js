function cambiarPrimerForm() {
    const empresaId = document.getElementById("empresaId");
    const personaId = document.getElementById("personaId");
    if (empresaId.style.display === "none") {
        empresaId.style.display = "block";
        personaId.style.display = "none";  
    } else {
        personaId.style.display = "none";       
    }    
}

function cambiarSegundoForm() {
    const empresaId = document.getElementById("empresaId");
    const personaId = document.getElementById("personaId");
    if (personaId.style.display === "none") {
        personaId.style.display = "block";
        empresaId.style.display = "none";  
    } else {
        empresaId.style.display = "none";       
    }    
}


