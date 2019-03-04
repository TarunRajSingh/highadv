'use strict';

var express = require('express');
var controller = require('./hotel.controller');

var router = express.Router();
var multer = require('multer');
var path   = require('path');
import Hotel from './hotel.model.js';


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
  }
});

const fileFilter = (req, file, cb) => {
if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
       return cb(new Error('Only image files are allowed!'), false);
   }
   cb(null, true);
};

var upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits:{
       fileSize: 10*1024* 1024, // Let 500 KB (max file size)
   },
   onError : function(err, next) {
       console.log('error', err);
       next(err);
     }
});


// It's very crucial that the file name matches the name attribute in your html
router.post('/newhotel', upload.single('hotel'), (req, res) => {
console.log(req.file);
  // TODO: Save 'req.file.path' to DB
  Hotel.find({UserEmail:req.body.UserEmail})
  .then(response=>{
    console.log(response);
  });

  Hotel.findOneAndUpdate(
    {UserEmail:req.body.UserEmail},
    {$set:{HotelType:"updatedchange"}}
  );

  res.redirect('back');
});

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/UserEmail/:UserEmail', controller.showid);
module.exports = router;
