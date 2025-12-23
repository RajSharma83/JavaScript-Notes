//  let nm = document.querySelector("#name");
//   let form = document.querySelector("#Form");
//   form.addEventListener("submit", function(event) {
//     event.preventDefault();
//    if (nm.ariaValueMax.length<=2)  {
//     document.querySelector("#warning").style.display = "inital";
//    } else {
//      document.querySelector("#warning").style.display = "none";
//    }
//   });



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    let isValid = true;

    emailError.textContent = '';
    passwordError.textContent = '';

    const emailValue = emailInput.value.trim();
    if (!emailValue) {
      emailError.textContent = 'Email is required.';
      isValid = false;
    } else if (!emailRegex.test(emailValue)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    const passwordValue = passwordInput.value.trim();
    if (!passwordValue) {
      passwordError.textContent = 'Password is required.';
      isValid = false;
    } else if (!passwordRegex.test(passwordValue)) {
      passwordError.textContent = 'Password must be at least 6 characters and contain both letters and numbers.';
      isValid = false;
    }

    if (isValid) {
      alert('Login successful!');
      form.reset(); 
    }
  });
});
