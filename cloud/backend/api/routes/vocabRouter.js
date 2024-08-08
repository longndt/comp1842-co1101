const vocabController = require('../controllers/vocabController')
const vocabRouter = (app) => {
   app.route('/vocabs')
      .get(vocabController.view_all_vocabs)
      .post(vocabController.add_new_vocab)
      .delete(vocabController.delete_all_vocabs)

   app.route('/vocabs/:id')
      .get(vocabController.view_a_vocab)
      .put(vocabController.update_vocab)
      .delete(vocabController.delete_a_vocab)
}
module.exports = vocabRouter