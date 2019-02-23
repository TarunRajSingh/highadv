'use strict';

import mongoose from 'mongoose';

var HotelSchema = new mongoose.Schema({
  UserEmail:String,
  name: {type: String,required: true},
  type: String,
  chainname: String,
  floor: Number,
  currency: String,
  rating: Number,
  year:Number,
  checkinhrsfrom:Number,
  checkinminfrom:Number,
  checkinampmfrom:String,
  checkinhrsto:Number,
  checkinminto:Number,
  checkinampmto:String,
  checkouthrsfrom:Number,
  checkoutminfrom:Number,
  checkoutampmfrom:String,
  checkouthrsto:Number,
  checkoutminto:Number,
  checkoutampmto:String,
  streetname:String,
  buildingname:String,
  landmark:String,
  city:String,
  state:String,
  country:String,
  zipcode:Number,
  bar:Boolean,
  gym:Boolean,
  lift:Boolean,
  parking:Boolean,
  restaurant:Boolean,
  spa:Boolean,
  swimmingpool:Boolean,
  BluRayPlayer:Boolean,
  CableChannels:Boolean,
  CDPlayer:Boolean,
  Computer:Boolean,
  DVDPlayer:Boolean,
  Fax:Boolean,
  FlatScreen:Boolean,
  TeliVision:Boolean,
  GamingConsole:Boolean,
  iPad:Boolean,
  Laptop:Boolean,
  LaptopSafe:Boolean,
  NintendoWii:Boolean,
  PS2:Boolean,
  PS3:Boolean,
  PS4:Boolean,
  Radio:Boolean,
  SatelliteChannels:Boolean,
  Telephone:Boolean,
  // Telivision:Boolean,
  VideoGames:Boolean,
  XBox360:Boolean,
  Barbeque:Boolean,
  CoffeeMachine:Boolean,
  DiningArea:Boolean,
  DiningTable:Boolean,
  HighChair:Boolean,
  Kitchenette:Boolean,
  Kitchenware:Boolean,
  Microwave:Boolean,
  OutdoorDiningArea:Boolean,
  OutdoorFurniture:Boolean,
  Refrigerator:Boolean,
  Stovetop:Boolean,
  TeaCoffeeMachine:Boolean,
  Toaster:Boolean,
  Elevator:Boolean,
  GrabRailsToilet:Boolean,
  StaircaseOnly:Boolean,
  GroundFloorOnly:Boolean,
  Wheelchair:Boolean,
  BabySafetyGlasses:Boolean,
  BoardGamePuzzles:Boolean,
  Books:Boolean,
  SafetySockets:Boolean,
  description:String,
  policies:String,
  images:String,
  phnno1:String,
  phnno2:String,
  landline:String,
  email:String,
  accholder:String,
  accno:String,
  gstno:String,
  ifsccode:String,
  panno:String,
  tax:Boolean,
  foodtaxsame:Boolean,
  priority:Number,
  show:Boolean,
});

export default mongoose.model('Hotel', HotelSchema);
