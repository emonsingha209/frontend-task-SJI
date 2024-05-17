document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      button.classList.add("active");
      const targetPane = document.getElementById(button.dataset.target);
      targetPane.classList.add("active");
    });
  });

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (event) => {
    console.log("trigger");
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    clearErrorMessages();

    let isValid = true;

    if (nameInput.value.trim().length < 2) {
      showErrorMessage(
        "name-error",
        "Name should be at least 2 characters long."
      );
      isValid = false;
    }

    if (emailInput.value.trim() === "") {
      showErrorMessage("email-error", "Please enter your email address.");
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showErrorMessage("email-error", "Please enter a valid email address.");
      isValid = false;
    }

    if (
      phoneInput.value.trim() === "" ||
      !isValidPhoneNumber(phoneInput.value.trim())
    ) {
      showErrorMessage("phone-error", "Please enter a valid phone number.");
      isValid = false;
    }

    if (messageInput.value.trim().length < 5) {
      showErrorMessage(
        "message-error",
        "Message should be at least 5 characters long."
      );
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
      clearErrorMessages();
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phoneNumber);
  }

  function showErrorMessage(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
  }

  function clearErrorMessages() {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
      element.textContent = "";
    });
  }
  const menuToggle = document.querySelector(".menu-icon");
  const menu = document.querySelector(".header");
  const closeIcon = document.querySelector(".close-icon");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  closeIcon.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});
