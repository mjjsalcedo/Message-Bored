module.exports = function(sequelize, DataTypes){
  var Users = sequelize.define("users", {
    username: { type: DataTypes.STRING,
    unique:true, allowNull: false },
    password: { type: DataTypes.STRING,
    allowNull: false }
  });

  Users.associate = function (models){
    Users.hasMany(models.topics);
    Users.hasMany(models.messages);
  };

  return Users;
};


