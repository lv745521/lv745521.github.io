/* permet de cliquer sur les élément de la barre de menu pour accedé au page(a propos conctact etc...) */
document.getElementById("menu").addEventListener("click", function(event) {
    var target = event.target;
  
    if (target.tagName === "A") {
      window.location.href = target.href;
    }
  });
