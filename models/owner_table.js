module.exports = function(sequelize, Sequelize) {
  var owner_table = sequelize.define("owner_table", {
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    phone_number: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    }
  });
  return owner_table;
};
