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
        username: user.name,
        id: user.id
      };
    });
    res.json(allUsers);
  });
});

router.get('/:id', (req,res)=>{
  let userId = parseInt(req.params.id);
  Users.findById(userId,
    {include: [{model: Messages, include :[{model: Topics, attributes:['name']}],attributes:['body', 'createdAt']}]}
    )
  .then( users => {
    let selectedUser = {
      username: users.name,
      posts: users.topics,
      messages: users.messages
    };

    res.json(selectedUser);
  });
});

router.post('/', (req,res)=>{
  Users.create({
    name: req.body.name,
  }).then((newUser)=>{
      res.json(newUser);
    });
});

module.exports = router;