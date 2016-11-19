'use strict';
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('burger', {
    burger_name:{
        type:DataTypes.STRING,
        allowNull: false
      },
    devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
          }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burger;
};