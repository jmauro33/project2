module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "lostFoundPet",
      [
        {
          pet_name: "Rex",
          pet_type: "dog",
          lost_location: "119th and Quivera",
          date: "March 23, 2020",
          description: "fuzzy, 10 lbs",
          color: "black",
          sex: "male",
          image_link:
            "https://c8.alamy.com/comp/XBRXF6/longhaired-chihuahua-portrait-XBRXF6.jpg",
          createdAt: false,
          updatedAt: false
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("lostFoundPets", null, {});
  }
};
