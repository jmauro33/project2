module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "fake@test.com",
          password: "password",
          firstname: "Sheri",
          lastname: "Rhoades",
          phonenumber: "555-123-1234",
          id: 1
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
