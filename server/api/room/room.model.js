'use strict';

import mongoose from 'mongoose';

var RoomSchema = new mongoose.Schema({
  UserEmail:String,
  HotelId:String,
  RoomType: String,
  NoOfRoom: Number,
  BedType: Boolean,
  AdultBase:Number,
  AdultMax:Number,
  Infants:Number,
  ChildrenBase:Number,
  ChildrenMax:Number,
  Total:Number,
  ClothesRack:Boolean,
  DryingRack:Boolean,
  FoldUpBed:Boolean,
  SofaBed:Boolean,
  Wardrobe:Boolean,
  Carpeted:Boolean,
  WalkingCloset:Boolean,
  ExtraLongBed:Boolean,
  FirePlace:Boolean,
  Heater:Boolean,
  InterConnectingRooms:Boolean,
  Iron:Boolean,
  Desk:Boolean,
  Wifi:Boolean,
  Smoking:Boolean,
  Telivision:Boolean,
  Bathroom:Boolean,
  ToilerPaper:Boolean,
  BathTub:Boolean,
  Shower:Boolean,
  BathRobe:Boolean,
  FreeToiletries:Boolean,
  HairDryer:Boolean,
  SpaTub:Boolean,
  SharedBathroom:Boolean,
  Slippers:Boolean,
  Toilet:Boolean,
  Geyser:Boolean,
  ExecutiveLounge:Boolean,
  AlarmClock:Boolean,
  WakeUp:Boolean,
  Linens:Boolean,
  Sheets:Boolean,
  AirConditioner:Boolean,
  Cooler:Boolean,
  Fan:Boolean,
  Kettle:Boolean,
  Laundry:Boolean,
  Balcony:Boolean,
  Terrace:Boolean,
  CityView:Boolean,
  LakeView:Boolean,
  LandmarkView:Boolean,
  PoolView:Boolean,
  RiverView:Boolean,
  OceanView:Boolean,
});

export default mongoose.model('Room', RoomSchema);
