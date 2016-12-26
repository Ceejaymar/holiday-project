'use strict';

module.exports = function(sequelize, DataTypes){
  const Project = sequelize.define("Project", {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    github: DataTypes.STRING,
    description: DataTypes.STRING
  })
  return Project;
};
