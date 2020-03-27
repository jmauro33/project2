$(document).ready(function() {
  $(".submit").on("click", function(event) {
    event.preventDefault();

    var lostPet = {
      pet_name: $(".pet-name")
        .val()
        .trim(),
      pet_type: $(".pet_type")
        .val()
        .trim(),

      //lost_location: address,                ,
      date: $("#date-lost")
        .val()
        .trim(),
      description: $(".description")
        .val()
        .trim(),
      //type: clickedIcon,
      color: $(".color")
        .val()
        .trim(),
      sex: $(".sex")
        .val()
        .trim(),
      image_link: $("#photo")
        .val()
        .trim()
      //Address:
    };

    $.post("/api/lostpet", lostPet, function(data) {
      $(".name").text(data.pet_name);
      $("#img").attr("src", data.image_link);
      $(".date_lost").text(data.date);
      $(".location").text(data.lost_location);
      $("#results-modal").modal("toggle");
    });

    // Send the POST request.
    $.ajax("/api/lostpet/", {
      type: "POST",
      data: lostPet
    }).then(function() {
      console.log("created lost pet");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
// } else {
//     console.log("empty fields");
//     if ($(".pet-name").val() == "") {
//         alert(" Please enter the pet name.");
//     } else if (clickedIcon == "") {
//         // dog.value == "" && cat.value == ""
//         alert(" Please select the pet type");
//     } else {
//         alert("Please enter location");
//     }
// }
