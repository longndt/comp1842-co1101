const express = require('express')
const router = express.Router()
var SongModel = require('../models/SongModel')

//create an API to return song list
//URL : localhost:3000/api/songs
router.get('/songs', async (req, res) => {
   try {
      let songs = await SongModel.find({})
      res.json(songs)
   } catch (err) {
      res.send(err)
   }
})

module.exports = router