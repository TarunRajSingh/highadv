'use strict';

import mongoose from 'mongoose';

var PriceSchema = new mongoose.Schema({
  UserEmail:String,
  RoomId:String,
  StartDate:Number,
  BookRoom:Number,
  RoomAvailable:Number,
  PulishedPrice:Number,
  BasePriceSingle:Number,
  BasePriceDouble:Number,
  ExtraAdultCost:Number,
  ExtraChildCost:Number,
  AdultBreakfastRate:Number,
  AdultLunchRate:Number,
  AdultDinnerRate:Number,
  ChildBreakfastRate:Number,
  ChildLunchRate:Number,
  ChildDinnerRate:Number,
  Show:Boolean
});

export default mongoose.model('Price', PriceSchema);
