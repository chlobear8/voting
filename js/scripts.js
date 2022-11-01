window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
      event.preventDefault();

      let legalAdult = document.getElementById("adult");
      legalAdult.setAttribute("class", "hidden");
      let under18 = document.getElementById("minor");
      under18.setAttribute("class", "hidden");

      const age = parseInt(document.querySelector("input#age").value);
      
      if (age >= 18) {
        legalAdult.removeAttribute("class");
      } else {
        under18.removeAttribute("class");
      }
    };
  };
