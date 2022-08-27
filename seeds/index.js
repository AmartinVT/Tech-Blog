const userSeed = require('../seeds/user-seeds.js');
const postSeed = require('../seeds/post-seeds.js');
const commentSeed = require('../seeds/comment-seeds.js');

const sequelize = require('../config/connection.js');

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