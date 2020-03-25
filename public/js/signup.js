$(document).ready(function() {

    var signUpForm = $("form.signup");
    var firstnameInput = $("input#firstname-input");
    var lastnameInput = $("input#lastname-input");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    var phonenumberInput = $("input#password-input");
  
    
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        firstname: firstnameInput.val().trim(),
        lastname: lastnameInput.val().trim(),
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
        phonenumber: phonenumberInput.val().trim()
      };
  
      if (!userData.firstname || userData.lastname || userData.email || !userData.password || userData.phonenumber) {
        return;
      }
     
      signUpUser(userData.firstname,userData.lastname,userData.email, userData.password,userData.phonenumber);

      firstname.val("");
      lastname.val("");
      emailInput.val("");
      passwordInput.val("");
      phonenumber.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(firstname,lastname,email,password,phonenumber) {
      $.post("/api/signup", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        phonenumber: phonenumber
      })
        .then(function(data) {
          window.location.replace("/members");
        
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  