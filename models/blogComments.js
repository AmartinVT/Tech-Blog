const { Model, DataTypes } = require('sequelize');
const sequelize = require('config/connection.js');

class blogComments extends Model {};

// Model initialization
blogComments.init(
    {
        // Unique key for all posts
        postID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        // Connects the postID to the userID 
        postUserID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },

        // Post title
        postTitle: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        // Post body content
        postContents: {
            type: DataTypes.TEXT,
            allowNull:false,
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = blogPosts;