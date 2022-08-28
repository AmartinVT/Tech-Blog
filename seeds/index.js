const userSeed = require('./user-seeds');
const postSeed = require('./post-seeds');
const commentSeed = require('./comment-seeds');

const sequelize = require('../config/connection');

// Function to call individual seed files
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNC SUCCESSFUL!!! -----\n');

    await userSeed();
    console.log('\n----- USER SEED SUCCESSFUL!!! -----\n');

    await postSeed();
    console.log('\n----- POST SEED SUCCESSFUL!!! -----\n');

    await commentSeed();
    console.log('\n----- COMMENT SEED SUCCESSFUL!!! -----\n');

    process.exit(0);
};

seedAll();