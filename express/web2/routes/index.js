var express = require('express');
var router = express.Router();


//render homepage
router.get('/', (req, res) => {
  res.send("This is homepage")
})

module.exports = router;
