// Cerrar Barra RGPD
function hbRgpd() {
  localStorage.setItem("rgpd", "aceptado"); // Creamos una valor en 'localStorage'
  document.getElementsByClassName("rgpdbh")[0].style.display = 'none'; // Oculto mi div con nombre de clase 'rgpdbh'
}    

// Leo si el dato 'rgpd' esta en Local Storage
var rgpdval = localStorage.getItem("rgpd");
//console.log(gdprval);

// Verificamos si el dato 'rgpd' ha sido seteado en Local Storage
if (rgpdval == 'aceptado') {
  document.getElementsByClassName("rgpdbh")[0].style.display = 'none';
}
else {
  document.getElementsByClassName("rgpdbh")[0].style.display = 'inherit';
} 
