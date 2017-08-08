const express = require('express');
const router = express.Router();
const db = require('../models');
let Users = db.users;
let Topics = db.topics;
let Messages = db.messages;

module.exports = router;