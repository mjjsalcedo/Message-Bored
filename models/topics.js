module.exports = function(sequelize, DataTypes){
  var Topics = sequelize.define("topics", {
    name: { type: DataTypes.STRING,
    unique:true, allowNull: false }
  });

    Topics.associate = function(models) {
    Topics.belongsTo(models.users,  {
      foreignKey: {
        name: 'created_by',
        allowNull: false
      }
    });
  };

  return Topics;
};