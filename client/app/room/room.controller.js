'use strict';

(function(){

class RoomComponent {
  constructor($http) {
    this.message = 'Hello';
    this.$http=$http;
  }

  $onInit() {
    document.getElementById('UserEmail').value=sessionStorage.getItem("UserEmail");
    // document.getElementById('UserEmail').value="newuser1@gmail.com";
    var roomid=sessionStorage.getItem("RoomToView")
    // var roomid="5ca36407d9615123ec2ecf56";
    this.$http.get('/api/rooms/'+roomid)
      .then(response => {
        console.log(response.data);
        this.fill(response.data);
      });
      // this.enableall();
  }

  fill(detail){
    document.getElementById('UserEmail').value=detail.UserEmail;
    document.getElementById('HotelId').value=detail.HotelId;
    document.getElementById('RoomType').value=detail.RoomType;
    document.getElementById('NoOfRoom').value=detail.NoOfRoom;
    document.getElementById('BedType').value=detail.BedType;
    document.getElementById('AdultBase').value=detail.AdultBase;
    document.getElementById('AdultMax').value=detail.AdultMax;
    document.getElementById('Infants').value=detail.Infants;
    document.getElementById('ChildrenBase').value=detail.ChildrenBase;
    document.getElementById('ChildrenMax').value=detail.ChildrenMax;
    document.getElementById('Total').value=detail.Total;
    document.getElementById("ClothesRack").checked=detail.ClothesRack;
    document.getElementById("DryingRack").checked=detail.DryingRack;
    document.getElementById("FoldUpBed").checked=detail.FoldUpBed;
    document.getElementById("SofaBed").checked=detail.SofaBed;
    document.getElementById("Wardrobe").checked=detail.Wardrobe;
    document.getElementById("Carpeted").checked=detail.Carpeted;
    document.getElementById("WalkingCloset").checked=detail.WalkingCloset;
    document.getElementById("ExtraLongBed").checked=detail.ExtraLongBed;
    document.getElementById("FirePlace").checked=detail.FirePlace;
    document.getElementById("Heater").checked=detail.Heater;
    document.getElementById("InterconnectingRooms").checked=detail.InterconnectingRooms;
    document.getElementById("Iron").checked=detail.Iron;
    document.getElementById("Desk").checked=detail.Desk;
    document.getElementById("WiFi").checked=detail.WiFi;
    document.getElementById("Smoking").checked=detail.Smoking;
    document.getElementById("TV").checked=detail.TV;
    document.getElementById("Bathroom").checked=detail.Bathroom;
    document.getElementById("ToilerPaper").checked=detail.ToilerPaper;
    document.getElementById("BathTub").checked=detail.BathTub;
    document.getElementById("Shower").checked=detail.Shower;
    document.getElementById("BathRobe").checked=detail.BathRobe;
    document.getElementById("FreeToiletries").checked=detail.FreeToiletries;
    document.getElementById("HairDryer").checked=detail.HairDryer;
    document.getElementById("SpaTub").checked=detail.SpaTub;
    document.getElementById("SharedBathroom").checked=detail.SharedBathroom;
    document.getElementById("Slippers").checked=detail.Slippers;
    document.getElementById("Toilets").checked=detail.Toilets;
    document.getElementById("Geyser").checked=detail.Geyser;
    document.getElementById("ExecutiveLounge").checked=detail.ExecutiveLounge;
    document.getElementById("AlarmClock").checked=detail.AlarmClock;
    document.getElementById("WakeUp").checked=detail.WakeUp;
    document.getElementById("Linens").checked=detail.Linens;
    document.getElementById("Sheets").checked=detail.Sheets;
    document.getElementById("AirConditioner").checked=detail.AirConditioner;
    document.getElementById("Cooler").checked=detail.Cooler;
    document.getElementById("Fan").checked=detail.Fan;
    document.getElementById("Kettle").checked=detail.Kettle;
    document.getElementById("Laundry").checked=detail.Laundry;
    document.getElementById("Balcony").checked=detail.Balcony;
    document.getElementById("Terrace").checked=detail.Terrace;
    document.getElementById("CityView").checked=detail.CityView;
    document.getElementById("LakeView").checked=detail.LakeView;
    document.getElementById("LandmarkView").checked=detail.LandmarkView;
    document.getElementById("PoolView").checked=detail.PoolView;
    document.getElementById("RiverView").checked=detail.RiverView;
    document.getElementById("OceanView").checked=detail.OceanView;
 }

 enableall(){
   // document.getElementById('UserEmail').disabled=true;
   // document.getElementById('HotelId').disabled=true;
   // document.getElementById('RoomType').disabled=true;
   // document.getElementById('NoOfRoom').disabled=true;
   // document.getElementById('BedType').disabled=true;
   // document.getElementById('AdultBase').disabled=true;
   // document.getElementById('AdultMax').disabled=true;
   // document.getElementById('Infants').disabled=true;
   // document.getElementById('ChildrenBase').disabled=true;
   // document.getElementById('ChildrenMax').disabled=true;
   // document.getElementById('Total').disabled=true;
   // document.getElementById("ClothesRack").checked=detail.ClothesRack;
   // document.getElementById("DryingRack").checked=detail.DryingRack;
   // document.getElementById("FoldUpBed").checked=detail.FoldUpBed;
   // document.getElementById("SofaBed").checked=detail.SofaBed;
   // document.getElementById("Wardrobe").checked=detail.Wardrobe;
   // document.getElementById("Carpeted").checked=detail.Carpeted;
   // document.getElementById("WalkingCloset").checked=detail.WalkingCloset;
   // document.getElementById("ExtraLongBed").checked=detail.ExtraLongBed;
   // document.getElementById("FirePlace").checked=detail.FirePlace;
   // document.getElementById("Heater").checked=detail.Heater;
   // document.getElementById("InterconnectingRooms").checked=detail.InterconnectingRooms;
   // document.getElementById("Iron").checked=detail.Iron;
   // document.getElementById("Desk").checked=detail.Desk;
   // document.getElementById("WiFi").checked=detail.WiFi;
   // document.getElementById("Smoking").checked=detail.Smoking;
   // document.getElementById("TV").checked=detail.TV;
   // document.getElementById("Bathroom").checked=detail.Bathroom;
   // document.getElementById("ToilerPaper").checked=detail.ToilerPaper;
   // document.getElementById("BathTub").checked=detail.BathTub;
   // document.getElementById("Shower").checked=detail.Shower;
   // document.getElementById("BathRobe").checked=detail.BathRobe;
   // document.getElementById("FreeToiletries").checked=detail.FreeToiletries;
   // document.getElementById("HairDryer").checked=detail.HairDryer;
   // document.getElementById("SpaTub").checked=detail.SpaTub;
   // document.getElementById("SharedBathroom").checked=detail.SharedBathroom;
   // document.getElementById("Slippers").checked=detail.Slippers;
   // document.getElementById("Toilets").checked=detail.Toilets;
   // document.getElementById("Geyser").checked=detail.Geyser;
   // document.getElementById("ExecutiveLounge").checked=detail.ExecutiveLounge;
   // document.getElementById("AlarmClock").checked=detail.AlarmClock;
   // document.getElementById("WakeUp").checked=detail.WakeUp;
   // document.getElementById("Linens").checked=detail.Linens;
   // document.getElementById("Sheets").checked=detail.Sheets;
   // document.getElementById("AirConditioner").checked=detail.AirConditioner;
   // document.getElementById("Cooler").checked=detail.Cooler;
   // document.getElementById("Fan").checked=detail.Fan;
   // document.getElementById("Kettle").checked=detail.Kettle;
   // document.getElementById("Laundry").checked=detail.Laundry;
   // document.getElementById("Balcony").checked=detail.Balcony;
   // document.getElementById("Terrace").checked=detail.Terrace;
   // document.getElementById("CityView").checked=detail.CityView;
   // document.getElementById("LakeView").checked=detail.LakeView;
   // document.getElementById("LandmarkView").checked=detail.LandmarkView;
   // document.getElementById("PoolView").checked=detail.PoolView;
   // document.getElementById("RiverView").checked=detail.RiverView;
   // document.getElementById("OceanView").checked=detail.OceanView;
 }

  //class end
}

angular.module('roompapaApp')
  .component('room', {
    templateUrl: 'app/room/room.html',
    controller: RoomComponent,
    controllerAs: 'roomCtrl'
  });

})();
