const vocabModel = require('../models/vocabModel')

const view_all_vocabs = async (req, res) => {
   try {
      vocabs = await vocabModel.find({})
      res.json(vocabs)
   } catch (err) {
      res.send(err)
   }
}

const add_new_vocab = async (req, res) => {
   try {
      await vocabModel.create(req.body)
      res.json({"message" : "create new vocab succeed !"})
   } catch (err) {
      res.send(err)
   }
}

const delete_all_vocabs = async (req, res) => {
   try {
      await vocabModel.deleteMany()
      res.json({ "message": "delete all vocabs succeed !" })
   } catch (err) {
      res.send(err)
   }
}

const view_a_vocab = async (req, res) => {
   try {
      vocab = await vocabModel.findById(req.params.id)
      res.json(vocab)
   } catch (err) {
      res.send(err)
   }
}

const update_vocab = async (req, res) => {
   try {
      await vocabModel.findByIdAndUpdate(req.params.id, req.body)
      res.json({ "message": "update vocab succeed !" })
   } catch (err) {
      res.send(err)
   }
}

const delete_a_vocab = async (req, res) => {
   try {
      await vocabModel.findByIdAndDelete(req.params.id)
      res.json({ "message": "delete a vocab succeed !" })
   } catch (err) {
      res.send(err)
   }
}

module.exports = {
   view_all_vocabs,
   add_new_vocab,
   delete_all_vocabs,
   view_a_vocab,
   update_vocab,
   delete_a_vocab
}