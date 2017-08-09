module.exports = function(sequelize, DataTypes){
  var Users = sequelize.define("users", {
    username: { type: DataTypes.STRING,
    unique:true, allowNull: false },
    password: { type: DataTypes.STRING,
    allowNull: false }
  });

  return Users;
};


