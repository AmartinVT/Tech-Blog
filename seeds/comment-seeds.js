const { blogComments } = require('models');
const blogComments = require('../models/blogUsers');

const commentSeed = [
    {
        commentContents: 'testComment1 - user1 - post3',
        commentUserID: 1,
        postID: 3,
    },
    
    {
        commentContents: 'testComment2 - user1 - post4',
        commentUserID: 1,
        postID: 4,
    },
    
    {
        commentContents: 'testComment3 - user2 - post5',
        commentUserID: 2,
        postID: 5,
    },

    {
        commentContents: 'testComment4 - user2 - post6',
        commentUserID: 2,
        postID: 6,
    },

    {
        commentContents: 'testComment5 - user3 - post1',
        commentUserID: 3,
        postID: 1,
    },

    {
        commentContents: 'testComment6 - user3 - post2',
        commentUserID: 3,
        postID: 2,
    },
];

const seedAll = () => blogComments.bulkCreate(commentSeed);

module.exports = seedAll;