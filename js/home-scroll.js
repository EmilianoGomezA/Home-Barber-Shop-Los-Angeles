function startTravel(){
  let link = document.getElementById("btn-travel");

  // Agregar un evento de clic al enlace
  link.addEventListener("click", function(event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Obtener la posición del elemento de destino
    let targetPosition = document.getElementById("our-services").offsetTop;

    // Agregar una animación de desplazamiento suave
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
};

function backToHome(){
  let link = document.getElementById("btn-to-home");

  // Agregar un evento de clic al enlace
  link.addEventListener("click", function(event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Obtener la posición del elemento de destino
    let targetPosition = document.getElementById("main-container").offsetTop;

    // Agregar una animación de desplazamiento suave
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
}

function travelToInstalations(){
  let link = document.getElementById("btn-to-instalations");

  // Agregar un evento de clic al enlace
  link.addEventListener("click", function(event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Obtener la posición del elemento de destino
    let targetPosition = document.getElementById("our-instalations").offsetTop;

    // Agregar una animación de desplazamiento suave
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
}

function backToServices(){
  let link = document.getElementById("btn-back-services");

  // Agregar un evento de clic al enlace
  link.addEventListener("click", function(event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Obtener la posición del elemento de destino
    let targetPosition = document.getElementById("our-services").offsetTop;

    // Agregar una animación de desplazamiento suave
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
}

function resetToHome(){
  let link = document.getElementById("reset-home");

  // Agregar un evento de clic al enlace
  link.addEventListener("click", function(event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();
    
    // Obtener la posición del elemento de destino
    let targetPosition = document.getElementById("main-container").offsetTop;

    // Agregar una animación de desplazamiento suave
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
}

startTravel();
backToHome();
travelToInstalations();
backToServices();
resetToHome();