$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var firstnameInput = $("input#first-name");
  var lastnameInput = $("input#last-name");
  var emailInput = $("input#email-address-input");
  var passwordInput = $("input#password-input");
  var phonenumberInput = $("input#phone-number-input");

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  signUpForm.submit("click", function(event) {
    event.preventDefault();

    var userData = {
      firstname: firstnameInput.val().trim(),
      lastname: lastnameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      phonenumber: phonenumberInput.val().trim()
    };

    if (
      !userData.firstname ||
      userData.lastname ||
      userData.email ||
      !userData.password ||
      userData.phonenumber
    ) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.firstname,
      userData.lastname,
      userData.email,
      userData.password,
      userData.phonenumber
    );

    userData.firstname.val("");
    userData.lastname.val("");
    userData.email.val("");
    userData.password.val("");
    userData.phonenumber.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the lost pet profile page
  // Otherwise we log any errors
  function signUpUser(firstname, lastname, email, password, phonenumber) {
    $.post("/signup", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      phonenumber: phonenumber
    })
      .then(function() {
        window.location.replace("/lostpet");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
