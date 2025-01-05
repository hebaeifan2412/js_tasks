document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("form1");
  
    const emailField = document.getElementById("email1");
    const passwordField = document.getElementById("inputPassword1");
    const confirmPasswordField = document.getElementById("inputPassword2");
    const mobileField = document.getElementById("number");
  
    const e = document.getElementById("validEmail");
    const p = document.getElementById("validPassword");
    const c = document.getElementById("ConfirmPassword");
    const m = document.getElementById("validMobile");
  
    const reg1 = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
    const reg2 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,18}$/;
    const reg3 = /^(077)\d{7}$/;
  
    // Helper function to show/hide error messages
    function showError(element, message) {
      element.textContent = message;
      element.style.color = "red";
      element.style.display = "block";
    }
  
    function hideError(element) {
      element.style.display = "none";
    }
  
    // Validate Email
    emailField.addEventListener('input', function () {
      if (!reg1.test(emailField.value)) {
        showError(e, "Not a valid email");
      } else {
        hideError(e);
      }
    });
  
    // Validate Password
    passwordField.addEventListener('input', function () {
      if (!reg2.test(passwordField.value)) {
        showError(p, "Password must contain upper, lower, number, special char");
      } else {
        hideError(p);
      }
  
      // Check if passwords match
      if (passwordField.value !== confirmPasswordField.value) {
        showError(c, "Passwords do not match");
      } else {
        hideError(c);
      }
    });
  
    // Validate Confirm Password
    confirmPasswordField.addEventListener('input', function () {
      if (passwordField.value !== confirmPasswordField.value) {
        showError(c, "Passwords do not match");
      } else {
        hideError(c);
      }
    });
  
    // Validate Mobile
    mobileField.addEventListener('input', function () {
      if (!reg3.test(mobileField.value)) {
        showError(m, "Not a valid mobile number");
      } else {
        hideError(m);
      }
    });
  
    // Form submission validation
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Final validation check before submission
      let isValid = true;
  
      if (!reg1.test(emailField.value)) {
        showError(e, "Not a valid email");
        isValid = false;
      }
      if (!reg2.test(passwordField.value)) {
        showError(p, "Password is not valid");
        isValid = false;
      }
      if (passwordField.value !== confirmPasswordField.value) {
        showError(c, "Passwords do not match");
        isValid = false;
      }
      if (!reg3.test(mobileField.value)) {
        showError(m, "Not a valid mobile number");
        isValid = false;
      }
  
      if (isValid) {
        alert("Form is valid and ready for submission!");
        // Submit form (if needed)
        // form.submit();
      } else {
        console.log("Form has errors. Fix them before submitting.");
      }
    });
  });
  