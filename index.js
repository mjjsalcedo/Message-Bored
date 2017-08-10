/*jshint esversion: 6 */
const express = require('express');
const PORT = process.env.PORT || 9000;
const bodyParser = require('body-parser');
const app = express();
const apiRoutes = require('./api');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const RedisStore = require('connect-redis')(session);
const saltRounds = 10;
const bcrypt = require('bcrypt');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  store: new RedisStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

let db = require('./models');
let Users = db.users;

passport.serializeUser((user, cb)=> {
  cb(null, user.id);
});

passport.deserializeUser((userId, cb)=> {
  Users.findById(userId, cb).then(user => {
      return cb(null, user);
  }).catch(err=>{
    if(err){
      return cb(err);
    }
  });
});

passport.use(new LocalStrategy((username,password, done)=>{
  Users.findOne({where: {username:username}}).then ( user => {
    if (user === null) {
      return done(null, false, {message: 'bad username or password'});
    }
    else {
      bcrypt.compare(password, user.password)
      .then(res => {
        if (res) { return done(null, user); }
        else {
          return done(null, false, {message: 'bad username or password'});
        }
      });
    }
  })
  .catch(err => {
    console.log('error: ', err);
  });
}
));

app.use('/api', apiRoutes);
app.use('*', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname });
});

app.listen(PORT, () => {
  db.sequelize.sync(/*{force:true}*/);
  console.log('server started on port: ' + PORT);
});