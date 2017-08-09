/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
let db = require('../../models');
let Users = db.users;
let Topics = db.topics;
let Messages = db.messages;

router.get('/', (req,res)=>{
  Users.findAll()
  .then( users => {
    let allUsers = users.map(user => {
      return {
        username: user.username
      };
    });
    res.json(allUsers);
  });
});

router.get('/:id', (req,res)=>{
  let userId = parseInt(req.params.id);
  Users.findById(userId,
    {include: [{model: Messages}]}
  )
  .then( users => {
    let selectedUser = {
          username:users.username,
          messages:users.messages
        };
    res.json(selectedUser);
  });
});

router.post('/', (req,res)=>{
  Users.create({
    username: req.body.username,
    password:req.body.password
  }).then((newUser)=>{
    Users.findOne({
    where: {username: newUser.username }})
    .then((displayUser)=>{
      let newlyCreatedUser = {
        username: displayUser.username
      };
      res.json(newlyCreatedUser);
    });
  });
});

module.exports = router;