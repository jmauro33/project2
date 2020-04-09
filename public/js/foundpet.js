$(document).ready(function() {
  var foundsubmitbtn = document.getElementById("foundsubmitbtn");
  var petname = document.getElementById("pet-name");
  var pettype = document.getElementById("pet-type");
  var color = document.getElementById("color");
  var sex = document.getElementById("sex");
  var date = document.getElementById("date-found");
  var foundlocation = document.getElementById("lastseen");
  var imagelink = document.getElementById("file");
  console.log(petname);
  console.log(pettype);

  console.log(color);
  console.log(sex);
  console.log(date);
  console.log(foundlocation);
  console.log(imagelink);

  foundsubmitbtn.addEventListener("click", function(event) {
    console.log("found button clicked"); //this is logging
    event.preventDefault();
    console.log(petname);
    console.log(pettype);
    console.log(color);
    console.log(sex);
    console.log(date);
    console.log(foundlocation);
    console.log(imagelink);

    var foundPet = {
      petname: petname.value,
      pettype: pettype.value,
      color: color.value,
      sex: sex.value,
      date: date.value,
      foundlocation: foundlocation.value,
      imagelink: imagelink.value
    };

    console.log(foundPet);
    console.log("foundPetdata");

    if (
      !foundPet.petname ||
      !foundPet.pettype ||
      !foundPet.color ||
      !foundPet.sex ||
      !foundPet.date ||
      !foundPet.lostlocation ||
      !foundPet.imagelink
    ) {
      console.log("FOUND Pet DATA");
      return;
    }
    enterfoundpet(
      foundPet.petname,
      foundPet.pettype,
      foundPet.petcolor,
      foundPet.petsex,
      foundPet.datelastseen,
      foundPet.lostlocation
    );
  });

  function enterfoundpet(
    petname,
    pettype,
    petcolor,
    petsex,
    datelastseen,
    foundlocation,
    imagelink
  ) {
    console.log("found pet entered");
    $.post("api/lostpet", {
      petname: petname,
      pettype: pettype,
      petcolor: petcolor,
      petsex: petsex,
      datelastseen: datelastseen,
      foundlocation: foundlocation,
      imagelink: imagelink
    })
      .then(function(response) {
        location.reload();
        console.log(response, "added found pet");
      })
      .catch(handleAddedErr);
  }
  function handleAddedErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
