/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
let db = require('../../models');
let Messages = db.messages;

module.exports = router;