function calcular() {
    // Obtener los valores del formulario
    const peso = parseFloat(document.getElementById("peso").value);
    const genero = document.getElementById("genero").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const edad = parseInt(document.getElementById("edad").value);
  
    // Calcular el IMC
    const imc = peso / ((altura / 100) ** 2);
  
    // Calcular la tasa metabólica basal (TMB)
    let tmb;
    if (genero === "masculino") {
      tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;
    } else {
      tmb = 10 * peso + 6.25 * altura - 5 * edad - 161;
    }
  
    // Calcular las calorías recomendadas según la actividad física
    const actividadFisica = parseFloat(document.getElementById("actividad").value);
    const caloriasRecomendadas = Math.round(tmb * actividadFisica);
  
    // Mostrar resultados
    const resultadoDiv = document.getElementById("resultados");
resultadoDiv.innerHTML =`<h2>Resultados:</h2> <p>IMC: ${imc.toFixed(2)}</p> <p>Tasa metabólica basal (TMB): ${tmb.toFixed(2)} calorías</p> <p>Calorías recomendadas según la actividad física: ${caloriasRecomendadas} calorías</p> `;
}
