$(document).ready(function() {
    // This file just does a GET request to figure out which pet is lost
    // and updates the HTML on the page
    $.get("/api/lostpet_data").then(function(data) {
      $(".pet-name").text(data.email);
    });
  });
  