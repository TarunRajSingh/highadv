'use strict';

(function(){

class NewroomComponent {
  constructor($http) {
    this.message = 'Hello';
    this.$http=$http;
  }
  $onInit() {
    document.getElementById('UserEmail').value=sessionStorage.getItem("UserEmail");
    // document.getElementById('UserEmail').value="newuser1@gmail.com";
  }

  create(){
    console.log("yes");
    var x=sessionStorage.getItem("UserEmail");
    this.$http.post('/api/rooms',{
     UserEmail:document.getElementById('UserEmail').value.toLowerCase(),
     RoomType: document.getElementById('RoomType').value.toLowerCase(),
     NoOfRoom: document.getElementById('NoOfRoom').value.toLowerCase(),
     BedType: document.getElementById('BedType').value.toLowerCase(),
     AdultBase:document.getElementById('BaseAdult').value.toLowerCase(),
     AdultMax:document.getElementById('MaximumAdult').value.toLowerCase(),
     Infants:document.getElementById('Infants').value.toLowerCase(),
     ChildrenBase:document.getElementById('BaseChildren').value.toLowerCase(),
     ChildrenMax:document.getElementById('MaximumChild').value.toLowerCase(),
     Total:document.getElementById('MaximumGuest').value.toLowerCase(),
     ClothesRack:document.getElementById("ClothesRack").checked,
     DryingRack:document.getElementById("DryingRack").checked,
     FoldUpBed:document.getElementById("FoldUpBed").checked,
     SofaBed:document.getElementById("SofaBed").checked,
     Wardrobe:document.getElementById("Wardrobe").checked,
     Carpeted:document.getElementById("Carpeted").checked,
     WalkingCloset:document.getElementById("WalkingCloset").checked,
     ExtraLongBed:document.getElementById("ExtraLongBed").checked,
     FirePlace:document.getElementById("FirePlace").checked,
     Heater:document.getElementById("Heater").checked,
     InterConnectingRooms:document.getElementById("InterconnectingRooms").checked,
     Iron:document.getElementById("Iron").checked,
     Desk:document.getElementById("Desk").checked,
     Wifi:document.getElementById("WiFi").checked,
     Smoking:document.getElementById("Smoking").checked,
     Telivision:document.getElementById("TV").checked,
     Bathroom:document.getElementById("Bathroom").checked,
     ToilerPaper:document.getElementById("ToilerPaper").checked,
     BathTub:document.getElementById("BathTub").checked,
     Shower:document.getElementById("Shower").checked,
     BathRobe:document.getElementById("BathRobe").checked,
     FreeToiletries:document.getElementById("FreeToiletries").checked,
     HairDryer:document.getElementById("HairDryer").checked,
     SpaTub:document.getElementById("SpaTub").checked,
     SharedBathroom:document.getElementById("SharedBathroom").checked,
     Slippers:document.getElementById("Slippers").checked,
     Toilet:document.getElementById("Toilets").checked,
     Geyser:document.getElementById("Geyser").checked,
     ExecutiveLounge:document.getElementById("ExecutiveLounge").checked,
     AlarmClock:document.getElementById("AlarmClock").checked,
     WakeUp:document.getElementById("WakeUp").checked,
     Linens:document.getElementById("Linens").checked,
     Sheets:document.getElementById("Sheets").checked,
     AirConditioner:document.getElementById("AirConditioner").checked,
     Cooler:document.getElementById("Cooler").checked,
     Fan:document.getElementById("Fan").checked,
     Kettle:document.getElementById("Kettle").checked,
     Laundry:document.getElementById("Laundry").checked,
     Balcony:document.getElementById("Balcony").checked,
     Terrace:document.getElementById("Terrace").checked,
     CityView:document.getElementById("CityView").checked,
     LakeView:document.getElementById("LakeView").checked,
     LandmarkView:document.getElementById("LandmarkView").checked,
     PoolView:document.getElementById("PoolView").checked,
     RiverView:document.getElementById("RiverView").checked,
     OceanView:document.getElementById("OceanView").checked,
     Images:[],
     Priority:1,
     Show:false,
     Price:{},
   });
   window.alert("New room "+document.getElementById('RoomType').value.toLowerCase()+" has been created.");
   location.href="/allrooms";
 }

  checkbeforecreate(){
    if(document.getElementById('RoomType').value=="")
      alert("Roomtype is empty!");
    else if(document.getElementById('NoOfRoom').value=="")
      alert("NoOfRoom is empty!");
    else if(document.getElementById('BedType').value=="")
      alert("BedType is empty!");
    else if(document.getElementById('BaseAdult').value=="")
      alert("BaseAdult is empty!");
    else if(document.getElementById('MaximumAdult').value=="")
      alert("MaximumAdult is empty!");
    else if(document.getElementById('Infants').value=="")
      alert("Infants is empty!");
    else if(document.getElementById('BaseChildren').value=="")
      alert("BaseChildren is empty!");
    else if(document.getElementById('MaximumChild').value=="")
      alert("MaximumChild is empty!");
    else if(document.getElementById('MaximumGuest').value=="")
      alert("MaximumGuest is empty!");
    else
      this.create();
 }
  // class end
}

angular.module('roompapaApp')
  .component('newroom', {
    templateUrl: 'app/newroom/newroom.html',
    controller: NewroomComponent,
    controllerAs: 'newroomCtrl'
  });

})();
