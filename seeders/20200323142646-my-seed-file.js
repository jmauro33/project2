module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "fake@test.com",
          password: "password",
          first_name: "Sheri",
          last_name: "Rhoades",
          phone_number: "555-123-1234",
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
