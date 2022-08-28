const { Users } = require('../models');

const userSeed = [
    {
        userName: 'testUser1',
        userPass: 'testPass1',
        userEmail: 'testEmail1@email.com',
    },
    
    {
        userName: 'testUser2',
        userPass: 'testPass2',
        userEmail: 'testEmail2@email.com',
    },
    
    {
        userName: 'testUser3',
        userPass: 'testPass3',
        userEmail: 'testEmail3@email.com',
    },
];

const seedAll = () => Users.bulkCreate(userSeed, {individualHooks: true});

module.exports = seedAll;