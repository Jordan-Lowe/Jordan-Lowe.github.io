// add a dropdown menu to the navigation
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

dropdown.addEventListener("click", function() {
  dropdownContent.classList.toggle("show");
});

// validate the contact form before submitting
const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", function(event) {
  if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
    event.preventDefault();
    alert("Please fill in all fields.");
  }
});
