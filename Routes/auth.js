const express = require('express');
const router = express.Router();
router.get('/login' , (req,res) => {
    res.render('login');
  });
  router.get('/signup' , (req,res) => {
    res.send('signup');
  });
  router.post('/register' , (req,res) => {
    // res.send('signup page');

  });
module.exports = router;