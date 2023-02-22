
/*numero.addEventListener("click", mudaCor); 
    function mudaCor() {
        numero.style.color = 'green';
    }*/

    const numeros = document.querySelectorAll(".num");

    numeros.forEach((num) => {
        num.addEventListener("click", function () {
          this.style.color = "green"
        })
      })