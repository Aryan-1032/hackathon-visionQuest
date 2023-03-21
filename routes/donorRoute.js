const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const donor = require('../controllers/donor');

router.route('/register')
    .get(donor.renderRegister)
    .post(catchAsync(donor.register));

router.route('/login')
    .get(donor.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), donor.login)

router.get('/logout', donor.logout)

module.exports = router;