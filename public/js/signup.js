$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var firstnameInput = $("input#firstname-input");
  var lastnameInput = $("input#lastname-input");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var phonenumberInput = $("input#password-input");

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(firstname, lastname, email, password, phonenumber) {
  $.post("/api/signup", {
      firstnameInput: firstname,
      lastnameInput: lastname,
      emailInput: email,
      passwordInput: password,
      phonenumberInput: phonenumber
    })
      .then(function (data) {
        window.location.replace("/lostpet");
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});