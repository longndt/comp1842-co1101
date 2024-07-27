var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  //path: views/index.hbs
  res.render('index');
});

//URL: https://localhost:4000/demo
router.get('/demo', (req, res) => {
  //Path: views/demo.hbs
  res.render('demo')
})

//Note: 1 path (url) can only render 1 page (view)
//but   1 page can be rendered by many paths
router.get('/hello', (req, res) => {
  res.render('welcome')
})

router.get('/welcome', (req, res) => {
  res.render('welcome')
})

router.get('/web', (req, res) => {
  let module_name = "Web Programming 2"
  let module_code = 'COMP1842'
  let year = 2024
  let image = 'https://www.hubspot.com/hs-fs/hubfs/how-to-start-coding-1.jpg?width=595&height=400&name=how-to-start-coding-1.jpg'
  let PI_Number = 3.14
  res.render('web',
    {
      module_name,
      module_code,
      image,
      year,
      PI_Number
    }
  )
})

router.get('/music', (req, res) => {
  let music = [
    'pop', 'rock' , 'R&B', 'blue', 'country'
  ]
  let songs = [
    'My love',
    'Nothing gonna change my love for you',
    'Only love'
  ]
  res.render('music',
    {
      am_nhac: music,
      songs,
      bands : ['911', 'Westlife']
    })
})

module.exports = router;
