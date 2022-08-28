const Users = require('../models/blogUsers.js');
const Posts = require('../models/blogPosts.js');
const Comments = require('../models/blogComments.js');

Users.hasMany(Posts, {foreignKey: 'userID'});

Users.hasMany(Comments, {foreignKey: 'userID'});
  
Posts.hasMany(Comments, {foreignKey: 'postID'});

Posts.belongsTo(Users, {foreignKey: 'userID'});

Comments.belongsTo(Users, {foreignKey: 'userID'});
  
Comments.belongsTo(Posts, {foreignKey: 'postID'});

module.exports = {Users, Posts, Comments};