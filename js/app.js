// Cerrar Barra RGPD
function hbRgpd() {
  localStorage.setItem("rgpd", "aceptado"); // Almaceno el dato 'rgpd' con el valor 'aceptado' en localStorage
  document.getElementsByClassName("rgpdbh")[0].style.display = 'none'; // Oculto mi div con nombre de clase 'rgpdbh'
}    

// Leo el dato 'rgpd' almacenado en localStorage y lo coloco en la variable 'rgpdval'
var rgpdval = localStorage.getItem("rgpd");
//console.log(gdprval);

// Verifico si el dato 'rgpd' ha sido almacenado en localStorage
if (rgpdval == 'aceptado') { // Si contiene el valor 'aceptado' ya no le mostramos la barra
  document.getElementsByClassName("rgpdbh")[0].style.display = 'none';
}
else { // Si no cerro la barra y no tiene almacenado el dato 'rgpd' con el valor 'aceptado' en localStorage, no se le muestra la Barra RGPD
  document.getElementsByClassName("rgpdbh")[0].style.display = 'inherit';
} 
