/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

let db = require('../../models');
let Users = db.users;
let Topics = db.topics;
let Messages = db.messages;

router.get('/', (req,res)=>{
  Messages.findAll({include: [{model: Users, attributes: ['name']},{model: Topics, attributes: ['id', 'name']}]})
  .then( messages => {
    let allMessages = messages.map(message => {
      return {
        id: message.id,
        user: message.user,
        topic: message.topic,
        createdAt: message.createdAt,
        body: message.body,
        author: message.author_id
      };
    });
    res.json(allMessages);
  });
});

router.get('/:id', (req,res)=>{
  let topicId = parseInt(req.params.id);
  Messages.findById(topicId,
    {include: [{model: Messages, include :[{model: Users, attributes:['name']}],attributes:['body', 'createdAt']}]}
    )
  .then( topic => {
    let selectedPost = {
      name: topic.name,
      users: topic.users,
      messages: topic.messages
    };
    res.json(selectedPost);
  });
});

router.post('/', (req,res)=>{
  let submittedInfo = req.body;
  Users.findOne({where: {name: submittedInfo.created_by}})
  .then((foundUser)=> {
    Messages.create({
      body: submittedInfo.body,
      topic_id: submittedInfo.topic_id,
      author_id: foundUser.id
    }).then((newUser)=>{
      res.json(newUser);
    });
  });
});

module.exports = router;