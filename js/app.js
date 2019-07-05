// Cerrar Barra RGPD
function hbRgpd() {
  localStorage.setItem("rgpd", "aceptado"); // Creamos una valor en 'localStorage'
  document.getElementsByClassName("rgpdbh")[0].style.display = 'none'; // Oculto mi div con nombre de clase 'rgpdbh'
}    

// Leo el dato 'rgpd' almacenado en localStorage y lo coloco en la variable 'rgpdval'
var rgpdval = localStorage.getItem("rgpd");
//console.log(gdprval);

// Verifico si el dato 'rgpd' ha sido almacenado en localStorage
if (rgpdval == 'aceptado') {
  document.getElementsByClassName("rgpdbh")[0].style.display = 'none';
}
else {
  document.getElementsByClassName("rgpdbh")[0].style.display = 'inherit';
} 
