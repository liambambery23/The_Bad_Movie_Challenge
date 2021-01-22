$(document).ready(() => {
  // Getting references to our form and inputs
  const registrationForm = $("form.login");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  registrationForm.on("submit", (event) => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the registerUser function and clear the form
    registerUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // registerUser does a post to our "api/login" route and if successful, redirects us the the members page
  function registerUser(email, password) {
    $.post("/api/register", {
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/");
        // If there's an error, log the error
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
