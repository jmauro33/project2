module.exports = function(sequelize, Sequelize) {
  var lostPet_table = sequelize.define("lostPet_table", {
    pet_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    pet_type: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    lost_location: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    color: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    sex: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    image_link: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  });
  return lostPet_table;
};
