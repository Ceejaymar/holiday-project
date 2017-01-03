'use strict';

module.exports = function(sequelize, DataTypes){
  const Skill = sequelize.define("Skill", {
    skill: DataTypes.STRING,
    icon: DataTypes.STRING
  })
  return Skill;
};
