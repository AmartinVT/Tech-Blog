const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class blogComments extends Model {};

// Model initialization
blogComments.init(
    {
        // Unique key for all posts
        commentID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        // Connects the commentID to the userID 
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'userID',
            }
        },

        // Connects comment ID to post ID
        postID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'postID',
            }
        },

        // Comment body content
        commentContents: {
            type: DataTypes.TEXT,
            allowNull:false,
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = blogComments;