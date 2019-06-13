'use strict';

var express = require('express');
var controller = require('./room.controller');

var router = express.Router();
var multer = require('multer');
var path   = require('path');
import Room from './room.model.js';


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    // console.log(req.body);
    cb(null, file.fieldname + '-'+req.body.UserEmail +'-'+ Date.now()+'-'+file.originalname)
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

router.get('/checkkr',(req,res)=>{
  console.log('call');
});


router.post('/newroom', upload.single('room'), (req, res) => {
// console.log(req.file);
  // TODO: Save 'req.file.path' to DB
  console.log(req.file);
  // console.log(req.body);
  Room.find({UserEmail:req.body.UserEmail})
  .then(response=>{
    console.log(response[0].Images);
    if(response[0].Images.length==0)
    {
      newimage(req.body.UserEmail,req.file.path);
    }
    else {
      addmoreimage(req.body.UserEmail,req.file.path,response[0].Images);
    }
  });
  res.redirect('back');
});


function newimage(x,imagetoinsert){
  var firstimage=[];
  firstimage.push(imagetoinsert);
  Room.update(
    {UserEmail:x},
    {$set:{Images:firstimage}},
    function(err) {
      console.log(err);
    }
  );
}

function addmoreimage(x,imagetoinsert,previousimages){
  var allimage=previousimages;
  allimage.push(imagetoinsert);
  Room.update(
    {UserEmail:x},
    {$set:{Images:allimage}},
    function(err) {
      console.log(err);
    }
  );
}

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/UserEmailHotel/:UserEmail', controller.showid);
module.exports = router;
