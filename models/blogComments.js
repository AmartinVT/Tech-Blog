const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class blogComments extends Model {};

// Model initialization
blogComments.init(
    {
        // Unique key for all posts
        id: {
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
                key: 'ID',
            }
        },

        // Connects comment ID to post ID
        postID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'ID',
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