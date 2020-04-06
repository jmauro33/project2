module.exports = function (sequelize, Sequelize) {
  var lostFoundPet = sequelize.define("lostFoundPet", {
    user_id: {
      type: Sequelize.INTEGER,
      foreignKey: true,
    },
    petname: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 255],
      },
    },
    pettype: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 255],
      },
    },
    lostlocation: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 255],
      },
    },
    date: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 255],
      },
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 255],
      },
    },
    color: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 255],
      },
    },
    sex: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 255],
      },
    },
    imagelink: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  });
  return lostFoundPet;
};
