/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
let db = require('../../models');
let Users = db.users;
let Topics = db.topics;
let Messages = db.messages;

router.get('/', (req,res)=>{
  Topics.findAll({include: [{model: Users, attributes:['name']}],attributes:['name']})
  .then( topics => {
    let allTopics = topics.map(topic => {
      return {
        name: topic.name,
        created_by: topic.user.name
      };
    });
    res.json(allTopics);
  });
});

router.put('/:name', (req,res)=>{
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