$(document).ready(function(){

    const alSafety = document.getElementById("safeOrNot");
    const btn = document.getElementById("safety");
    btn.onclick = function () {
      if (alSafety.style.display !== "none") {
        alSafety.style.display = "none";
      } else {
        alSafety.style.display = "block";
      }
    };

   
});

