const { Posts } = require('../models');

const postSeed = [
    {
        postTitle: 'testPostTitle1 - user1',
        postContent: 'testPostContent1 - user1',
        postUserID: 1,
    },
    
    {
        postTitle: 'testPostTitle2 - user1',
        postContent: 'testPostContent2 - user1',
        postUserID: 1,
    },
    
    {
        postTitle: 'testPostTitle3 - user2',
        postContent: 'testPostContent3 - user2',
        postUserID: 2,
    },

    {
        postTitle: 'testPostTitle4 - user2',
        postContent: 'testPostContent4 - user2',
        postUserID: 2,
    },

    {
        postTitle: 'testPostTitle5 - user3',
        postContent: 'testPostContent5 - user3',
        postUserID: 3,
    },

    {
        postTitle: 'testPostTitle6 - user3',
        postContent: 'testPostContent6 - user3',
        postUserID: 3,
    },
];

const seedAll = () => Posts.bulkCreate(postSeed);

module.exports = seedAll;