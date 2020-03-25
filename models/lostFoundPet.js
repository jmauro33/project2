module.exports = function(sequelize, Sequelize) {
  var lostFoundPet = sequelize.define("lostFoundPet", {
    user_id: {
      type: Sequelize.INTEGER,
      foreignKey: true
    },
    pet_name: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
    },
    pet_type: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
    },
    lost_location: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
    },
    color: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
    },
    sex: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
    },
    image_link: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  });
  return lostFoundPet;
};
