const router = require('express').Router();
const { Posts, Users, Comments } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Posts.findAll({
        attributes: ['id', 'postTitle', 'postContents', 'userID', 'created_at'],
        include: [
            {
                model: Comments,
                attributes: ['id', 'commentContents', 'userID', 'postID', 'created_at'],
                include: [{
                    model: Users,
                    attributes: ['userName']
                }]
            },
            {
                model: Users,
                attributes: ['userName']
            }
        ],
        order: [['created_at', 'DESC']]
    });

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );
    const session_user_id = req.session.user_id;
    const data = {session_user_id, posts};
    res.render('homepage', {
      data,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the post
    try {
      const postData = await Posts.findByPk(req.params.id, {
        attributes: ['id', 'postTitle', 'postContents', 'userID', 'created_at'],
        include: [
          {
            model: Comments,
            attributes: ['id', 'commentContents', 'userID', 'postID', 'created_at'],
            include: [
                {
                    model: Users,
                    attributes: ['userName']
                }
            ]
          },
          {
            model: Users,
            attributes: ['userName']
          }
        ],
      });
      const post = postData.get({ plain: true });
      const session_user_id = req.session.userID;
      const data = {session_user_id, post}
      res.render('post', { data, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/register', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('register');
});

module.exports = router;