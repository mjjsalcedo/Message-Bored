/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

let userRoutes = require('./users');
let topicToutes = require('./topics');
let messageRoutes = require('./messages');

router.use('/users', userRoutes);
router.use('/topics', topicToutes);
router.use('/messages', messageRoutes);

module.exports = router;