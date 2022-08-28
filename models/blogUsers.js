const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt'); // Required for password encryption
const sequelize = require('../config/connection.js');

class blogUsers extends Model {
    // Function for password validation comparing entry to password stored in user data
    blogPassCheck(userPass) {
        return bcrypt.compareSync(userPass, this.password) //Pass or fail condition
    }
};

// Model initialization
blogUsers.init(
    {
        // Unique key for all users
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        // Username storage 
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        // Password storage
        userPass: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        // Email storage
        userEmail: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                isEmail: true,
            },
        },
    },
    {
        // Hook for utilizing encryption functionality of bcrypt on user password
        hooks: {
            beforeCreate: async (userValidation) => {
              userValidation.password = await bcrypt.hash(userValidation.password, 10);
              return userValidation;  
            },
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    },
);

module.exports = blogUsers;