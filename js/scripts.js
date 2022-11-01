window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
      event.preventDefault();

      let legalAdult = document.getElementById("adult");
      legalAdult.setAttribute("class", "hidden");
      let minors = document.getElementById("minor");
      minors.setAttribute("class", "hidden");

      const age = parseInt(document.querySelector("input#age").value);
      
      if (age >= 18) {
        legalAdult.removeAttribute("class");
      } else {
        minors.removeAttribute("class");
      }
    };
  };