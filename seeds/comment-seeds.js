const { Comments } = require('../models');

const commentSeed = [
    {
        commentContents: 'testComment1 - user1 - post3',
        userID: 1,
        postID: 3,
    },
    
    {
        commentContents: 'testComment2 - user1 - post4',
        userID: 1,
        postID: 4,
    },
    
    {
        commentContents: 'testComment3 - user2 - post5',
        userID: 2,
        postID: 5,
    },

    {
        commentContents: 'testComment4 - user2 - post6',
        userID: 2,
        postID: 6,
    },

    {
        commentContents: 'testComment5 - user3 - post1',
        userID: 3,
        postID: 1,
    },

    {
        commentContents: 'testComment6 - user3 - post2',
        userID: 3,
        postID: 2,
    },
];

const seedAll = () => Comments.bulkCreate(commentSeed);

module.exports = seedAll;