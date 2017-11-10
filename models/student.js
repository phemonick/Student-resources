'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    name: {
    type:  DataTypes.STRING,
     allowNull: false,
     validate: {
       notEmpty: {
         args: true,
         message: 'input name'
       }
     }
   },
    matricId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sex: {
      DataTypes.STRING,
      allowNull: false,
    },
    class: {
      DataTypes.STRING,
      allowNull: false,
    },
    department: {
      DataTypes.STRING,
      allowNull: false,
    },
    email: {
      DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Student;
};
shilekunpelu1$
