var express = require('express');
var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;
var db = require('./db');

passport.use(new Strategy(
    function (token, cb) {
        db.users.findByToken(token, function (err, user) {
            if (err) { return cb(err); }
            if (!user) { return cb(null, false); }
            return cb(null, user);
        });
    }));


var app = express();
app.use(require('morgan')('combined'));

app.get('/',
    passport.authenticate('bearer', { session: false }),
    function (req, res) {
        res.json({ username: req.user.username, email: req.user.emails[0].value });
    });

app.listen(8080);