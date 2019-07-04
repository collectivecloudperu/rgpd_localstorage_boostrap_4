// Cerrar Barra RGPD
function hbRgpd() {
  localStorage.setItem("rgpd", "aceptado"); // Creamos una valor en 'localStorage'
  document.getElementsByClassName("rgpdbh")[0].style.display = 'none'; // Oculto mi div con nombre de clase 'rgpdbh'
}    

// Seteamos 'rgpd_nc_aceptado' en Local Storage
var rgpdval = localStorage.getItem("rgpd");
//console.log(gdprval);

// Verificamos si 'rgpd_nc_aceptado' ha sido seteado en Local Storage
if (rgpdval == 'aceptado') {
  document.getElementsByClassName("rgpdbh")[0].style.display = 'none';
}
else {
  document.getElementsByClassName("rgpdbh")[0].style.display = 'inherit';
} 