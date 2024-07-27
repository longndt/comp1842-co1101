const mongoose = require('mongoose')
const SongSchema = new mongoose.Schema(
   {
      name : String
   }
)
const SongModel = mongoose.model("songs", SongSchema)
module.exports = SongModel