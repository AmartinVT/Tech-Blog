const { blogUsers } = require('../models');
const User = require('../models/blogUsers');

const userSeed = [
    {
        username: 'testUser1',
        password: 'testPass1',
        email: 'testEmail1@email.com',
    },
    
    {
        username: 'testUser2',
        password: 'testPass2',
        email: 'testEmail2@email.com',
    },
    
    {
        username: 'testUser3',
        password: 'testPass3',
        email: 'testEmail3@email.com',
    },
];

const seedAll = () => User.bulkCreate(userSeed, {individualHooks: true});

module.exports = seedAll;