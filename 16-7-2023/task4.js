function validateName() {
    let user = document.getElementById("name").value;
    let userp = /^[a-zA-Z0-9_]{5,}$/;
  
    if (userp.test(user)) {
      document.getElementById("message6").textContent = "Valid User name!";
    } else {
      document.getElementById("message6").textContent = "Invalid username! Please follow the username requirements.";
    }
  }




let passwordInput = document.getElementById("password").value;

function validatePassword() {
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])(?!.*\s).{8,}$/;
  
    if (passwordPattern.test(passwordInput)) {
      document.getElementById("message").textContent = "Valid password!";
    } else {
      document.getElementById("message").textContent = "Invalid password! Please follow the password requirements.";
    }
  }


  function validateCPassword() {
    let CpasswordInput = document.getElementById("Cpassword").value;  
    if (passwordInput == CpasswordInput) {
      document.getElementById("message5").textContent = "Valid password!";
    } else {
      document.getElementById("message5").textContent = "Invalid password! Password does not match";
    }
  }

  function validateEmail() {
  var emailInput = document.getElementById("email").value;
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(emailInput)) {
    document.getElementById("message1").textContent = "Valid email address!";
  } else {
    document.getElementById("message1").textContent = "Invalid email address! Please enter a valid email.";
  }
  }

  function validateDate() {
  var dateInput = document.getElementById("date").value;
  var datePattern = /^\d{4}-\d{2}-\d{2}$/;

  if (datePattern.test(dateInput) && isValidDate(dateInput)) {
    document.getElementById("message2").textContent = "Valid date!";
  } else {
    document.getElementById("message2").textContent = "Invalid date! Please enter a valid date in the format YYYY-MM-DD.";
  }
}
