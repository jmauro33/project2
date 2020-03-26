var db = require("../models");

module.exports = function(app) {
  //Get all lost pets
  app.get("/api/lostpet", function(req, res) {
    db.lostFoundPet.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Add a new lost pet
  app.post("/api/lostpet", function(req, res) {
    db.lostFoundPet.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  //find a specific pet by id
  app.get("/api/lostpet/:id", function(req, res) {
    db.lostFoundPet
      .findAll({ where: { id: req.params.id } })
      .then(function(results) {
        res.json(results);
      });
  });

  // Update a lost pet by id
  app.put("/api/lostpet/:id", function(req, res) {
    db.lostFoundPet
      .update(req.body, { where: { id: req.params.id } })
      .then(function(results) {
        res.json(results);
      });
  });

  // Remove a lost pet
  app.delete("/api/lostpet/:id", function(req, res) {
    db.lostFoundPet
      .destroy({ where: { id: req.params.id } })
      .then(function(results) {
        res.json(results);
      });
  });
};
