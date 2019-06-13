'use strict';

(function(){

class NewhotelComponent {
  constructor($http,Auth) {
    this.message = 'Hello';
    this.$http = $http;
    this.isAdmin = Auth.isAdmin;
    // console.log(this.isAdmin());
    // console.log(Auth);
  }

  $onInit() {
    document.getElementById('UserEmail').value=sessionStorage.getItem("UserEmail");
    // this.check();
  }

  createhotel(){
      var empty=[];
      this.$http.post('/api/hotels',{
      UserEmail:document.getElementById('UserEmail').value.toLowerCase(),
      name: document.getElementById('HotelName').value.toLowerCase(),
      type:  document.getElementById('HotelType').value.toLowerCase(),
      chainname:  document.getElementById('ChainName').value.toLowerCase(),
      floor: document.getElementById('Floor').value.toLowerCase(),
      currency:  document.getElementById('Currency').value.toLowerCase(),
      rating:  document.getElementById('Rating').value.toLowerCase(),
      year: document.getElementById('Year').value.toLowerCase(),
      checkinhrsfrom: document.getElementById('CheckInTimeFromHour').value,
      checkinminfrom: document.getElementById('CheckInTimeFromMinute').value,
      checkinampmfrom: document.getElementById('CheckInTimeFromAmPm').value,
      checkinhrsto: document.getElementById('CheckInTimeToHour').value,
      checkinminto: document.getElementById('CheckInTimeToMinute').value,
      checkinampmto: document.getElementById('CheckInTimeToAmPm').value,
      checkouthrsfrom: document.getElementById('CheckOutTimeFromHour').value,
      checkoutminfrom: document.getElementById('CheckOutTimeFromMinute').value,
      checkoutampmfrom: document.getElementById('CheckOutTimeFromAmPm').value,
      checkouthrsto: document.getElementById('CheckOutTimeToHour').value,
      checkoutminto: document.getElementById('CheckOutTimeToMinute').value,
      checkoutampmto: document.getElementById('CheckOutTimeToAmPm').value,
      streetname: document.getElementById('StreetName').value.toLowerCase(),
      buildingname: document.getElementById('BuildingName').value.toLowerCase(),
      landmark: document.getElementById('Landmark').value.toLowerCase(),
      city: document.getElementById('City').value.toLowerCase(),
      state: document.getElementById('State').value.toLowerCase(),
      country: document.getElementById('Country').value.toLowerCase(),
      zipcode: document.getElementById('ZipCode').value.toLowerCase(),
      bar:document.getElementById("Bar").checked,
      gym:document.getElementById("Gym").checked,
      lift:document.getElementById("Lift").checked,
      parking:document.getElementById("Parking").checked,
      restaurant:document.getElementById("Restaurant").checked,
      spa:document.getElementById("Spa").checked,
      swimmingpool:document.getElementById("SwimmingPool").checked,
      BluRayPlayer:document.getElementById("BluRayPlayer").checked,
      CableChannels:document.getElementById("CableChannels").checked,
      CDPlayer:document.getElementById("CDplayer").checked,
      Computer:document.getElementById("Computer").checked,
      DVDPlayer:document.getElementById("DVDPlayer").checked,
      Fax:document.getElementById("Fax").checked,
      FlatScreen:document.getElementById("FlatScreenTV").checked,
      GamingConsole:document.getElementById("GamingConsole").checked,
      iPad:document.getElementById("iPad").checked,
      Laptop:document.getElementById("Laptop").checked,
      LaptopSafe:document.getElementById("LaptopSafe").checked,
      NintendoWii:document.getElementById("NintendoWii").checked,
      PS2:document.getElementById("PS2").checked,
      PS3:document.getElementById("PS3").checked,
      PS4:document.getElementById("PS4").checked,
      Radio:document.getElementById("Radio").checked,
      SatelliteChannels:document.getElementById("SatelliteChannels").checked,
      Telephone:document.getElementById("Telephone").checked,
      Telivision:document.getElementById("Telivision").checked,
      VideoGames:document.getElementById("VideoGames").checked,
      XBox360:document.getElementById("Xbox360").checked,
      Barbeque:document.getElementById("Barbeque").checked,
      CoffeeMachine:document.getElementById("CoffeeMachine").checked,
      DiningArea:document.getElementById("DiningArea").checked,
      DiningTable:document.getElementById("DiningTable").checked,
      HighChair:document.getElementById("HighChair").checked,
      Kitchenette:document.getElementById("Kitchenette").checked,
      Kitchenware:document.getElementById("Kitchenware").checked,
      Microwave:document.getElementById("Microwave").checked,
      OutdoorDiningArea:document.getElementById("OutdoorDiningArea").checked,
      OutdoorFurniture:document.getElementById("OutdoorFurniture").checked,
      Refrigerator:document.getElementById("Refrigerator").checked,
      Stovetop:document.getElementById("Stovetop").checked,
      TeaCoffeeMachine:document.getElementById("TeaCoffeeMachine").checked,
      Toaster:document.getElementById("Toaster").checked,
      Elevator:document.getElementById("Elevator").checked,
      GrabRailsToilet:document.getElementById("GrabRailsToilet").checked,
      StaircaseOnly:document.getElementById("StaircaseOnly").checked,
      GroundFloorOnly:document.getElementById("GroundFloorOnly").checked,
      Wheelchair:document.getElementById("Wheelchair").checked,
      BabySafetyGlasses:document.getElementById("BabySafetyGlasses").checked,
      BoardGamePuzzles:document.getElementById("BoardGamePuzzles").checked,
      Books:document.getElementById("Books").checked,
      SafetySockets:document.getElementById("SafetySockets").checked,
      description:document.getElementById('Description').value.toLowerCase(),
      policies:document.getElementById('Policies').value.toLowerCase(),
      images:empty,
      phnno1:document.getElementById('PhoneNumber').value.toLowerCase(),
      phnno2:document.getElementById('AlternateNumber').value.toLowerCase(),
      landline:document.getElementById('Landline').value.toLowerCase(),
      email:document.getElementById('Email').value.toLowerCase(),
      accholder:document.getElementById('AccountHolersName').value.toLowerCase(),
      accno:document.getElementById('AccountNumber').value.toLowerCase(),
      gstno:document.getElementById('GSTNumber').value.toLowerCase(),
      ifsccode:document.getElementById('IFSCCode').value.toLowerCase(),
      panno:document.getElementById('PANNumber').value.toLowerCase(),
      tax:document.getElementById('AccomodationTax').value.toLowerCase(),
      foodtaxsame:document.getElementById('FoodTax').value.toLowerCase(),
      priority:1,
      show:false,
   }).then(console.log("post here"));
 }


 create(){
   if(
      document.getElementById('HotelName').value==""||
      document.getElementById('HotelType').value==""||
      document.getElementById('ChainName').value==""||
      document.getElementById('Floor').value==""||
      document.getElementById('Rating').value==""||
      document.getElementById('Year').value==""||
      document.getElementById('StreetName').value==""||
      document.getElementById('BuildingName').value==""||
      document.getElementById('Landmark').value==""||
      document.getElementById('City').value==""||
      document.getElementById('State').value==""||
      document.getElementById('Country').value==""||
      document.getElementById('ZipCode').value==""||
      document.getElementById('PhoneNumber').value==""||
      document.getElementById('AlternateNumber').value==""||
      document.getElementById('Email').value==""||
      document.getElementById('Description').value==""||
      document.getElementById('Policies').value==""||
      document.getElementById('AccountHolersName').value==""||
      document.getElementById('AccountNumber').value==""||
      document.getElementById('GSTNumber').value==""||
      document.getElementById('IFSCCode').value==""||
      document.getElementById('PANNumber').value=="")
      window.alert("Please fill mandatory fields (*)");

  else{
      this.createhotel();
      // document.getElementById("imagebutton").click();
       window.alert("Your hotel has been successfully created please proceed further.");
      // location.href='/allrooms';
    }
 }

  check(){
    var x;
    var useremail=sessionStorage.getItem("UserEmail");
    console.log(useremail);
    this.$http.get('/api/hotels/UserEmail/'+useremail)
      .then(response => {
        x = response.data;
        if(x.UserEmail==useremail)
          location.href='/hotel';
      });
  }

//class end here
}





angular.module('roompapaApp')
  .component('newhotel', {
    templateUrl: 'app/newhotel/newhotel.html',
    controller: NewhotelComponent,
    controllerAs: 'newhotelCtrl'
  });

})();
