const { Posts } = require('../models');

const postSeed = [
    {
        postTitle: 'testPostTitle1 - user1',
        postContents: 'testPostContent1 - user1',
        userID: 1,
    },
    
    {
        postTitle: 'testPostTitle2 - user1',
        postContents: 'testPostContent2 - user1',
        userID: 1,
    },
    
    {
        postTitle: 'testPostTitle3 - user2',
        postContents: 'testPostContent3 - user2',
        userID: 2,
    },

    {
        postTitle: 'testPostTitle4 - user2',
        postContents: 'testPostContent4 - user2',
        userID: 2,
    },

    {
        postTitle: 'testPostTitle5 - user3',
        postContents: 'testPostContent5 - user3',
        userID: 3,
    },

    {
        postTitle: 'testPostTitle6 - user3',
        postContents: 'testPostContent6 - user3',
        userID: 3,
    },
];

const seedAll = () => Posts.bulkCreate(postSeed);

module.exports = seedAll;