'use strict';

module.exports = function(sequelize, Datatypes){
  const Project = sequelize.define("Post", {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    github: DataTypes.STRING,
    description: DataTypes.STRING
  })
  return Post;
}
