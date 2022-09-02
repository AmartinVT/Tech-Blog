const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt'); // Required for password encryption
const sequelize = require('../config/connection.js');

class Users extends Model {
    // Function for password validation comparing entry to password stored in user data
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.userPass) //Pass or fail condition
    }
};

// Model initialization
Users.init(
    {
        // Unique key for all users
        id: {
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
            beforeCreate: async (newUserData) => {
              newUserData.userPass = await bcrypt.hash(newUserData.userPass, 10);
              return newUserData;  
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    },
);

module.exports = Users;