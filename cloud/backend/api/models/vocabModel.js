const mongoose = require('mongoose')
const vocabSchema = mongoose.Schema(
   {
      //english, german: column (field) name
      english: {
         type: String,
         required: true
      },
      german: {
         type: String,
         required: true
      }
   },
   {
      versionKey: false
   }
)
const vocabModel = mongoose.model("vocabs", vocabSchema)     //vocabs: table (collection) name
module.exports = vocabModel