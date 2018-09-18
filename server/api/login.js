const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
router.use(express.json());

const UserSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
});
const User = mongoose.model("User",UserSchema,"Users");

router.get('/', (req, res) => {
  User.find({email: req.query.email , password: req.query.password}, (err, user) => {
    res.send(user);
  })
  })
router.post('/', (req, res) => {
    res.send(req.body);
  })

  module.exports = router
  //z8LzAyjpdk4tXpOI