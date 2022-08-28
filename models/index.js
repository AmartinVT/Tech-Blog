const Users = require('./blogUsers');
const Posts = require('./blogPosts');
const Comments = require('./blogComments');

Users.hasMany(Posts, {foreignKey: 'userID'});

Users.hasMany(Comments, {foreignKey: 'userID'});
  
Posts.hasMany(Comments, {foreignKey: 'postID'});

Posts.belongsTo(Users, {foreignKey: 'userID'});

Comments.belongsTo(Users, {foreignKey: 'userID'});
  
Comments.belongsTo(Posts, {foreignKey: 'postID'});

module.exports = {Users, Posts, Comments};