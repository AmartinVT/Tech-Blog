const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class blogPosts extends Model {};

// Model initialization
blogPosts.init(
    {
        // Unique key for all posts
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        // Connects the postID to the userID 
        userID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'ID',
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