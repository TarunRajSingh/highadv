'use strict';

var express = require('express');
var controller = require('./price.controller');

var router = express.Router();
import Price from './price.model.js';


router.post('/price/', (req, res) => {
  console.log(req.body);
  var z=-1;
  var startdate=new Date();
  startdate=new Date(startdate.getFullYear(),startdate.getMonth(),startdate.getDate());
  startdate=startdate.getTime();
  var startdate=parseInt(startdate);

  while(z<730)
  {
      z++;
      Price.create(
      {
        UserEmail:req.body.UserEmail,
        RoomId:req.body.RoomId,
        StartDate:startdate+z*24*60*60*1000,
        BookRoom:0,
        RoomAvailable:req.body.RoomNumber,
        PulishedPrice:req.body.published_price,
        BasePriceSingle:req.body.base_1,
        BasePriceDouble:req.body.base_2,
        ExtraAdultCost:req.body.extraadult,
        ExtraChildCost:req.body.extrachild,
        AdultBreakfastRate:req.body.adult_breakfast,
        AdultLunchRate:req.body.adult_lunch,
        AdultDinnerRate:req.body.adult_dinner,
        ChildBreakfastRate:req.body.child_breakfast,
        ChildLunchRate:req.body.child_lunch,
        ChildDinnerRate:req.body.child_dinner,
        Show:true,
      },
      function(err) {
        console.log(err);
      }
    );
  }
  res.redirect('/allrooms');
});


router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/UserPrice/:RoomId', controller.showid);

module.exports = router;
