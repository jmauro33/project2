$(document).ready(function() {
  var lostsubmitbtn = document.getElementById("lostsubmitbtn");
  var petname = document.getElementById("pet-name");
  var pettype = document.getElementById("pet_type");
  var description = document.getElementById("description");
  var color = document.getElementById("color");
  var sex = document.getElementById("sex");
  var date = document.getElementById("date-lost");
  var lostlocation = document.getElementById("lastseen");
  var imagelink = document.getElementById("photo");

  lostsubmitbtn.addEventListener("click", function(event) {
    console.log("Lost button clicked"); //this is logging
    event.preventDefault();

    var lostPet = {
      petname: petname.value,
      pettype: pettype.value,
      description: description.value,
      color: color.value,
      sex: sex.value,
      date: date.value,
      lostlocation: lostlocation.value,
      imagelink: imagelink.value
    };

    console.log(lostPet);
    console.log("lostPetdata");

    if (
      !lostPet.petname ||
      !lostPet.pettype ||
      !lostPet.description ||
      !lostPet.color ||
      !lostPet.sex ||
      !lostPet.date ||
      !lostPet.lostlocation ||
      !lostPet.imagelink
    ) {
      console.log("MISSING Pet DATA");
      return;
    }
    enterlostpet(
      lostPet.petname,
      lostPet.pettype,
      lostPet.description,
      lostPet.petcolor,
      lostPet.petsex,
      lostPet.datelastseen,
      lostPet.lostlocation
    );
  });

  function enterlostpet(
    petname,
    pettype,
    description,
    petcolor,
    petsex,
    datelastseen,
    lostlocation,
    imagelink
  ) {
    console.log("lost pet entered");
    $.post("api/lostpet", {
      petname: petname,
      pettype: pettype,
      description: description,
      petcolor: petcolor,
      petsex: petsex,
      datelastseen: datelastseen,
      lostlocation: lostlocation,
      imagelink: imagelink
    })
      .then(function(response) {
        // window.location.replace("/members.html");
        console.log(response, "added lost pet");
      })
      .catch(handleAddedErr);
  }
  function handleAddedErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
