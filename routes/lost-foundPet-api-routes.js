var db = require("../models");

module.exports = function(app) {
  //Get all lost pets
  app.get("/api/lostpets", function(req, res) {
    db.buddyFnder.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Add a new lost pet
  app.post("/api/lostpets", function(req, res) {
    db.buddyFnder.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  // Update a lost pet by id
  app.put("/api/lostpets/:id", function(req, res) {
    db.buddyFnder
      .update({ where: { id: req.params.id } })
      .then(function(results) {
        res.json(results);
      });
  });

  // Remove a lost pet
  app.delete("/api/lostpets/:id", function(req, res) {
    db.buddyFnder
      .destroy({ where: { id: req.params.id } })
      .then(function(results) {
        res.json(results);
      });
  });
};
