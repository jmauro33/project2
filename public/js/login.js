$(document).ready(function () {
  // Getting references to our form and inputs
  var loginButton = $("#loginButton");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginButton.on("click", function (event) {
    console.log("loginbtn clicked");
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    console.log("userdata: " + userData);

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the lost pet profile page
  function loginUser(email, password) {
    console.log(email, password, "userlogin");
    $.get("/api/login", {
      email: email,
      password: password,
    })
      .then(function (response) {
        console.log(response, "hello");
        window.location.replace("/addlostpet.html");
        // If there's an error, log the error
      })
      .catch(function (err) {
        console.log(err);
      });
  }
});
