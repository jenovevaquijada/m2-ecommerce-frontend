// Botón con id="btnTop" 
const btnTop = document.getElementById("btnTop");
if (btnTop) {
    btnTop.addEventListener("click", () => { 
        window.scrollTo({ top: 0, behavior: "smooth" });
    }); 
} 

window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth'
});


        const form = document.getElementById("thanks");
        const successMessage =
            document.getElementById("congo");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            successMessage.style.display = "block";
        });

          const form = document.getElementById("btnEnviar-01");
        const successMessage =
            document.getElementById("btnEnviar-01");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            successMessage.style.display = "block";
        });

